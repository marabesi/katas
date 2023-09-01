class Rover {
    setCommand(command: string) {
    }

    getPosition() {
        return ''
    }
}




























describe('my rover', () => {
    it('should turn right and send position', () => {
        const rover = new Rover();

        rover.setCommand('R');

        expect(rover.getPosition()).toEqual('0:0:E');
    })
})


























