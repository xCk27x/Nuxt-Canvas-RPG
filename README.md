# Nuxt Canvas RPG

## install

basic installation step ->

```git clone https://github.com/xCk27x/nuxt-canvas.git <project-name>```

```cd <project-name>``` 

```npm install```

then type in ```npm run dev``` to start the game

## Get Start
I set the canvas game as a page, so you can find this page in /pages/index.vue
in this file, <template> have a cnavas element, if you want to change the size of this canvas element, please modify the values in ```/stores/canvasStore.ts```.

<img src="https://github.com/xCk27x/nuxt-canvas/assets/90547641/3f943ef9-9602-4a55-acd5-633700c48724" width="500" />

## Settings

All the Settings you are going to modify is in the composables directory, there is an TS file called ```useMapSettings.ts```, there are three main things you need to provide to create a map
1. **lowerLayer**: a string, denotes the floor of this map, any item will cover it.
  
2. **upperLayer**: a string, denotes the ceiling of this map, it will cover all the items and lowerLayer.
  
3. **items**: an array, the type of element can fit into this array is defined in ```'composables/class/ItemObject.ts'```, but I know it's hard to find out what is legal for this array, so you can read next chapter and get the detail.

4. **walls**: all the walls in the map, I know what you are wondering: **I need to key in all the walls by myself?** Yep, there is no AI this project, so I can't know what you are thinking.

## Items

There are 2 kinds of Item:
1. **PersonObject**: if an item can move or trigger event, then this item is a PersonObject.
```type is defined in ~/types/Person.ts```

```typescript
new PersonObject({
  name: 'characterName', // Character's Name
  x: withGridX(1), // initial X position
  y: withGridY(2), // initial Y position
  firstDirection: 'up', // 'up', 'down', 'left', 'right'
  src: '/characters/npc1.png',
  behaviorLoop: [
    { type: 'stand', direction: 'right', time: 800 },  // type: 'stand', 'walk'
    { type: 'stand', direction: 'down' , time: 800 },  // direction: 'up', 'down', 'left', 'right'
    { type: 'stand', direction: 'left', time: 1200},   // time: number (ms)
    { type: 'stand', direction: 'up', time: 300},      // it's a loop of behavior
  ]
}),
```

2. **ItemObject**: if an item cannot do anything except render on the map, then this item is an ItemObject
```type is defined in ~/types/Item.ts```
