const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

var oldConsoleLog = console.log;

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map(p => {
          if (p.place != this.place) {
            // parcel not picked up yet
            return p;
          }

          // parcel picked up, so is moving to next destination
          return { place: destination, address: p.address };
        })
        // any parcels that are to be delivered here, remove as they're delivered    
        .filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function runRobotBenchmark(state, robot, memory) {
  let turn = 0;
  while (state.parcels.length > 1) {
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    turn++;
  }

  return turn;
}

/*
  Random robot
*/
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

/*
  Mail fixed route robot
*/

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
]

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }

  return { direction: memory[0], memory: memory.slice(1) };
}

/*
  Route finding robot
*/

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) {
        return route.concat(place);
      }

      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return {direction: route[0], memory: route.slice(1)};
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1Turns = 0;
  let robot2Turns = 0;

  for (let i = 0; i < 99; i++) {
    let randomParcels = VillageState.random(5);
    robot1Turns += runRobotBenchmark(randomParcels, robot1, memory1);
    robot2Turns += runRobotBenchmark(randomParcels, robot2, memory2);
  }  

  console.log(`Robot1 took an average of ${Math.floor(robot1Turns/100)} turns`);
  console.log(`Robot2 took an average of ${Math.floor(robot2Turns/100)} turns`);
}

const roadGraph = buildGraph(roads);
/* console.log(JSON.stringify(roadGraph));

 let first = new VillageState(
     "Post Office",
     [{place: "Post Office", address: "Alice's House"}]
 );

 let next = first.move("Alice's House");
 console.log(next.place);
 console.log(next.parcels);

 console.log(first.place);
*/

let randomParcels = VillageState.random(10);

console.log(runRobotBenchmark(randomParcels, randomRobot));
console.log(runRobotBenchmark(randomParcels, routeRobot, []));
console.log(runRobotBenchmark(randomParcels, goalOrientedRobot, []));

compareRobots(routeRobot, [], goalOrientedRobot, []);
