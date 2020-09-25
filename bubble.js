class Bubble{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.history = [];
        this.color = {r:random(255),g:0,b:random(255)};
        this.lastmouse = {x: x,y: y};
    }
    tail(){
        let perc = 0.2
        this.lastmouse.x += (mouseX - this.lastmouse.x)*perc;
        this.lastmouse.y += (mouseY - this.lastmouse.y)*perc;
        this.x = this.lastmouse.x;
        this.y = this.lastmouse.y;
    }

    update(){
        
        this.x = (this.x + random(-10,10));
        this.y = (this.y + random(-10,10));
        
        for(let i = 0;i<this.history.length;i++)
        {
            this.history[i].x += random(-1,1);
            this.history[i].y += random(-1,1);
        }
        
        //let v = createVector(this.x, this.y);
        let v = {
            x: this.x,
            y: this.y,
            col: this.color
        };
        this.history.push(v)
        if(this.history.length >50)
        {
            this.history.splice(0,1);
        }
    }

    draw(){
        noFill();
        beginShape();
        for(let i=0;i<this.history.length;i++){
            let pos = this.history[i];
            //stroke(10, 200);
            stroke(pos.col.r, pos.col.g, pos.col.b, 200);
            vertex(pos.x, pos.y);
        }
        endShape();
        strokeWeight(1);
        fill(this.color.r,this.color.g,this.color.b);
        circle(this.x,this.y, this.r);
    }

  
  }
  