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






class MarsRoverSpy {
    constructor(private roverApi: RoverApiService) { }

    async fetchRemotePosition(): Promise<string> {
        const rover: Message= await this.roverApi.fetchPosition('my-rover')

        if (rover.position === '0:0:N')  {
            return 'waiting';
        }

        return '0:0:E';
    }
}








export class RoverApiServiceSuccessSpy {
    async fetchPosition(roverId: string): Promise<Message> {
        return new Message('0:0:N');
    }
}








































describe('Spy', () => {
    it('should verify the call to the api', async () => {
        const roverApiServiceSuccess = new RoverApiServiceSuccessSpy();

        const spyOn = jest.spyOn(roverApiServiceSuccess, 'fetchPosition');

        const rover = new MarsRoverSpy(roverApiServiceSuccess);
        const result = await rover.fetchRemotePosition();

        expect(spyOn).toHaveBeenCalled()
        expect(result).toEqual('waiting')
    });
});























