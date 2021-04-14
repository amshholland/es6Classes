// Phase 1
class Room {
    constructor(name, length, width, available, capacity) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = 15;
    }
    getArea() {
        return this.length * this.width;
    }
    getPerimeter() {
        return this.length * 2 + this.width * 2;
    }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);

room2.available = false;

console.log(room1, "Area: " + room1.getArea(), "Perimeter: " + room1.getPerimeter());
console.log(room2, "Area: " + room2.getArea(), "Perimeter: " + room2.getPerimeter());

// Phase 2

const available = Object.create(Room);

console.log("Room1 Availability: " + room1.available);
console.log("Room2 Availability: " + room2.available);

// Phase 3

// 10. Modify the new call for room2 to set capacity to 18 using a constructor parameter.

room2.capacity = 18;

console.log("Room1 Capacity: " + room1.capacity);
console.log("Room2 Capacity: " + room2.capacity);