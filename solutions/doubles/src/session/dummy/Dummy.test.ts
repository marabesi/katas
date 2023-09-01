class AuthenticatedUser {
}

class MarsRover {
    constructor(user: AuthenticatedUser) { }

    execute(command: string, isActive: boolean, id: string) {
        return '0:0:E';
    }
}



























describe('Dummy', () => {

    it('mars rover should turn right when command is R', () => {
       const rover = new MarsRover(new AuthenticatedUser());

        const dummyIid = 'id';
        const lastPosition = rover.execute('R', false, dummyIid);

       expect(lastPosition).toEqual('0:0:E');
    });
});



















