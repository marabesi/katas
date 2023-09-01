import axios from 'axios';

class Message {
    constructor(public position: string) {}
}








class RoverApiService {
    async fetchPosition(roverId: string): Promise<Message> {
        const response = await axios.get('http://localhost:42422');
        return new Message(response.data)
    }
}




export class RoverApiServiceSuccess {
    async fetchPosition(roverId: string): Promise<Message> {
        return new Message('10:10');
    }
}

class RoverApiServiceError extends RoverApiService {
    async fetchPosition(roverId: string): Promise<Message> {
        throw Error('no funciona');
    }
}













class MarsRoverStub {
    constructor(private roverApi: RoverApiService) { }

    async fetchRemotePosition(): Promise<string> {
        try {
            const rover: Message= await this.roverApi.fetchPosition('my-rover')

            if (rover.position === '0:0:N')  {
                return 'waiting';
            }

            return '0:0:E';
        } catch (error) {
            return 'error no me he conectado'
        }
    }
}



















describe('Stubs', () => {
    it('mars rover should fetch current position from api', async () => {
        const rover = new MarsRoverStub(new RoverApiServiceSuccess());

        const position = await rover.fetchRemotePosition();

        expect(position).toEqual('0:0:E');
    });

    it('mars rover should inform error when cannot connect to the api', async () => {
        const rover = new MarsRoverStub(new RoverApiServiceError());

        const position = await rover.fetchRemotePosition();

        expect(position).toEqual('error no me he conectado');
    });
});


















