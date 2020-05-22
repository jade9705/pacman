'use strict';

console.log('it works!');

const TILE_SIZE = 85;

class Stage{
  constructor(width, height, entities) {
    this.width = width;
    this.height = height;

  };

  render() {
    const stageElm = document.createElement('div');
    stageElm.className = 'stage';
    return stageElm;
  };
  
  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.tilesToPixels();
    this.update();
  };

  tilesToPixels() {
    this.width *= 85;
    this.height *= 85;
  };
  
  update() {
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    
  };

};
const app = document.querySelector('#app');
let stage1 = new Stage(11, 7);
stage1.mount(app);

class Pacman{
  constructor(xpos, ypos, mouth) {
    this.xpos = (xpos - 1)*TILE_SIZE;
    this.ypos = (ypos - 1)*TILE_SIZE;
    this.mouth = mouth;
  };

  render() {
    const pacmanElm = document.createElement('div');
    pacmanElm.className = 'entity entity--pac pacboy-active-light';

    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight') { 
        pacmanElm.style.backgroundPositionY = '0%';
        this.moveRight();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowLeft') { 
        pacmanElm.style.backgroundPositionY = '33%';
        this.moveLeft();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowUp') { 
        pacmanElm.style.backgroundPositionY = '100%';
        this.moveUp();
        this.switch();
        this.update();
      };
    });
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowDown') { 
        pacmanElm.style.backgroundPositionY = '66%';
        this.moveDown();
        this.switch();
        this.update();
      };
    });
    return pacmanElm;
  };

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  moveRight() {
    const stageWidthInTile = stage1.width - TILE_SIZE;
    if(this.xpos < stageWidthInTile){
      this.xpos += TILE_SIZE;
    }
  };
  moveLeft() {
    const stageWidthInTile = stage1.width - TILE_SIZE;
    if(this.xpos > 0){
      this.xpos -= TILE_SIZE;
    }
  };

  moveUp() {
    const stageHeightInTile = stage1.height - TILE_SIZE;
    if(this.ypos < stageHeightInTile){
      this.ypos += TILE_SIZE;
    }
  };

  moveDown() {
    const stageHeightInTile = stage1.height - TILE_SIZE;
    if(this.ypos > 0){
      this.ypos -= TILE_SIZE;
    }
  };

  switch() {
    if (this.mouth === 'open') {
      this.mouth = 'closed';
    } else {
      this.mouth = 'open';
    };
  }

  

  update() {
    this.element.style.left = `${this.xpos}px`;
    this.element.style.bottom = `${this.ypos}px`;
    // this.element.style.backgroundPositionX = `${this.mouth}`
    

    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0%'
    } else {
      this.element.style.backgroundPositionX = '100%'
    };
  };

};
  const stage1Elm = document.querySelector('.stage');
  let pacman1 = new Pacman(2, 4, 'close');
  pacman1.mount(stage1Elm);

console.log(stage1);

class Entities{
  constructor(xpos, ypos, type) {
    this.xpos = (xpos - 1)*TILE_SIZE;
    this.ypos = (ypos - 1)*TILE_SIZE;
    this.type = type;
  };

  render() {
    const entity = document.createElement('div');
    entity.className = 'entity';
    return entity;
  };

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  };

  update(){
    this.element.classList.add(`entity--${this.type}`);
    this.element.style.left = `${this.xpos}px`;
    this.element.style.bottom = `${this.ypos}px`;

  };
};

fetch('http://bootcamp.podlomar.org/api/pacman?width=11&height=6')
.then((resp) => resp.json())
.then((json) => {
  console.log(json);

  let entityArr = [];

  for (let i = 0; i < json.walls.length; i += 1){
    // console.log(i);
    entityArr[i] = new Entities(`${json.walls[i].x}`, `${json.walls[i].y}`, 'wall');
    entityArr[i].mount(stage1Elm);
  }

  for (let i = 0; i < json.apples.length; i += 1){
    // console.log(i);
    entityArr[i + json.walls.length] = new Entities(`${json.apples[i].x}`, `${json.apples[i].y}`, 'apple');
    entityArr[i + json.walls.length].mount(stage1Elm);
  }

  for (let i = 0; i < json.bombs.length; i += 1){
    // console.log(i);
    entityArr[i + json.walls.length +json.apples.length] = new Entities(`${json.bombs[i].x}`, `${json.bombs[i].y}`, 'bomb');
    entityArr[i + json.walls.length +json.apples.length].mount(stage1Elm);
  }
})


