const commonConstants = {
  'FIRST_COMMAND_ACCEPTANCE_LENGTH': 3
}

const movements = {
  'TURN_RIGHT': 'R',
  'TURN_LEFT': 'L',
  'MOVE_FORWARD': 'F'
}

const directions = {
  'NORTH': 'N',
  'EAST': 'E',
  'WEST': 'W',
  'SOUTH': 'S'
}

const sides = [directions.NORTH, directions.EAST, directions.SOUTH, directions.WEST];

module.exports = {
  commonConstants,
  movements,
  directions,
  sides
}