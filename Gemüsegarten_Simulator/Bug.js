var Gemüsegarten_Simulator;
(function (Gemüsegarten_Simulator) {
    class Bug extends Gemüsegarten_Simulator.Vector {
        position;
        velocity;
        lifetime;
        speed;
        constructor(_position, _velocity) {
            this.position ?  = Gemüsegarten_Simulator.Vector : ;
            this.velocity = Gemüsegarten_Simulator.Vector;
        }
        move(_timeslice) {
            //console.log("Bug moves");
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += C;
        }
    }
    Gemüsegarten_Simulator.Bug = Bug;
})(Gemüsegarten_Simulator || (Gemüsegarten_Simulator = {}));
//# sourceMappingURL=Bug.js.map