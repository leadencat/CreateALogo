class shape {
    constructor() {
        this.color = 'black';
        this.textColor = 'black';
        this.text = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    renderText() {
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

    render() {
        return'';
    }
}

    class Triangle extends shape {
        constructor() {
            super();
            this.points = "150, 18 244, 182 56, 182";
        }

        renderText() {
            return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        }

        render() {
            return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="${this.points}" fill="${this.color}" />
            ${this.renderText()}
        </svg>`;
        }
    }

    class Circle extends shape {
        constructor() {
            super();
            this.radius = 50;
            this.cx = 100;
            this.cy = 100;
        }

        render() {
            return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />
                    ${this.renderText()}
                    </svg>`;
        }
    }

    class Square extends shape {
        constructor() {
            super();
            this.sideLength - 100;
            this.x = 50;
            this.y = 50;
        }

        render() {
            return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
            ${this.renderText()}
        </svg>`;
        }
    }

    module.exports = {Shape, Triangle, Circle, Square};