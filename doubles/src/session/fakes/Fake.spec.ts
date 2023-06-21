class FakeAuthenticatedUser {
    constructor(public name: string) {}
}


class FakeMarsRover {
    constructor(private user: FakeAuthenticatedUser) { }

    execute(command: string) {
        if (this.user.name !== 'Andrea') {
            return '0:0:E'
        }
        return '0:0:N';
    }
}

































describe('Fake', () => {
    it('mars rover should turn right when user is Jose', () => {
        const rover = new FakeMarsRover(new FakeAuthenticatedUser('Jose'));
        const lastPosition = rover.execute('R');

        expect(lastPosition).toEqual('0:0:E');
    });

    it('mars rover should not turn right when user is Andrea', () => {
        const rover = new FakeMarsRover(new FakeAuthenticatedUser('Andrea'));
        const lastPosition = rover.execute('R');

        expect(lastPosition).toEqual('0:0:N');
    });
});









