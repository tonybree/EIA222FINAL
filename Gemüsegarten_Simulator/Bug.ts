namespace Gemüsegarten_Simulator {
    export class Bug extends Vector {
        public position: Vector;
        protected velocity: Vector;
        private lifetime: number;
        private speed: number;

        constructor (_position?: Vector, _velocity: Vector) {
            this.position? = Vector;
            this.velocity = Vector;
        }

        

        public move(_timeslice: number): void {
            //console.log("Bug moves");
            let offset: Vector = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += C
        }
    }
}