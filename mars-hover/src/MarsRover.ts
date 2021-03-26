export class MarsRover {
  execute(command: string) {
    let facing: string = 'N'

    const steps = {
      x: 0,
      y: 0,
    }

    for (const commandItem of command) {
      if (commandItem === 'R') {
        facing = this.rotate(facing, commandItem)
      }

      if (commandItem === 'L') {
        facing = this.rotate(facing, commandItem)
      }

      if (facing === 'N'&& commandItem === 'M') {
        steps.y++
      }

      if (facing === 'E' && commandItem === 'M') {
        steps.x++
      }

      if (steps.x >= 10) {
        steps.x = 0
      }

      if (steps.y >= 10) {
        steps.y = 0
      }
    }

    return `${steps.x}:${steps.y}:${facing}`
  }

  rotate(facing: string, direction: string): string {
    const position = {
      'R': {
        'N': 'E',
        'E': 'S',
        'S': 'W',
        'W':'N'
      },
      'L': {
        'N': 'W',
        'W': 'S',
        'S': 'E',
        'E': 'N',
      }
    }

    return position[direction][facing]
  }
}