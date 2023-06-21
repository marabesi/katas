class PositionRepository {
    save(position: string) {}
}

class MarsRoverMock {
    constructor(private mockedRepository: PositionRepository) { }

    execute(command: string) {
        this.mockedRepository.save('0:0:E');
    }
}

























describe('Mocks', () => {

    it('mars rover should store its position whenever a command is sent', () => {
        const mockedRepository = {
            save: jest.fn()
        }

        const rover = new MarsRoverMock(mockedRepository);

        rover.execute('R');

        expect(mockedRepository.save).toHaveBeenCalledWith('0:0:E');
    });
});


















