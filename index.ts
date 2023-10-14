/*  
    - Create a class name Shop 

    inventoryValue:
        This method will calculate the total value of all items in the character's inventory and return that value.

- Shop Class Methods:
    - constructor
        - The constructor will create three (3) Items and add them to the list of items in the shop


## Step 4: Create Driver Code to Emulate a Front-End User

- Use the classes and methods created to accomplish tasks with the RPG characters and their inventories:

    Create a Character.
    Create an Inventory.
    Write code to add items from the inventory to the character's inventory, print the inventory, remove all instances of a singular item from the inventory, and remove a specified quantity from the inventory.
    Verify that all functions work as expected. If any issues arise, figure out why and fix your functions.

This approach will demonstrate how the concepts from both assignments can be integrated into a single OOP system, where RPG characters have their own inventories that function similarly to a shopping cart.

*/

// Make an abstract class (InventoryItem) with id, name, price, description.
//Worry about private and public stuff later
import {v4 as uuidv4} from 'uuid'


abstract class InventoryItem {
    private id: string;
    private name: string;
    private price:number;
    private description: string

    constructor(id:string, name:string, price:number, description:string){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
    }
}



class Weapon extends InventoryItem{
    private damage:number

    constructor(id: string, name: string, price: number, description:string, damage:number){
        super(id, name, price, description);
        this.damage = damage
    }

    getDamage(): number {
        return this.damage
    }

    setDamage(damage:number): void {
        this.damage = damage
    }
}



class Armor extends InventoryItem {
    private defense: number

    constructor(id: string, name: string, price: number, description:string, defense:number){
        super(id, name, price, description);
        this.defense = defense
    }

    getDefense(): number {
        return this.defense
    }

    setDefense(defense:number): void {
        this.defense = defense
    }

}



class Inventory {
    items: InventoryItem[]

    constructor() {
        this.items = []
    }
}

class Shop{
    private item: InventoryItem[]

    constructor(item: InventoryItem[]){
        this.item = item
    }
}
//create three (3) Items and add them to the list of items in the shop
function newItems() {}

class Character {
    id: string;
    name: string;
    archtype: string;
    fightingStyle: 'ranged' | 'melee';
    inventory: InventoryItem[];

    constructor(name: string, archtype:string, fightingStyle :'ranged'|'melee'){
        this.id = uuidv4()
        this.name = name
        this.archtype = archtype
        this.fightingStyle = fightingStyle
        this.inventory = []
    }
};


    function addToInventory(item: InventoryItem, character: Character){
        character.inventory.push(item)
    }

    function printInventory(character: Character){
        console.log(character.inventory)
    }

    function removeAllInstanceOfItem(item: InventoryItem, character: Character){
        character.inventory = character.inventory.filter(i => i != item)
    }

    function removeSpecifiedQuantity (quantity: number,item: InventoryItem, character:Character  ){
        let count = 0
        character.inventory = character.inventory.filter(i => {
            if (i === item && count < quantity){
                count++
                return false
            }
            return true
        })

    }


const sword = new Weapon('1', 'seans sword', 100, 'sweet sword', 11)
console.log(sword.getDamage())
sword.setDamage(15)
console.log(sword.getDamage())