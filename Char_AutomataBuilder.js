class AutomataBuilder_character{
    lowerCaseCharacters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  
    upperCaseCharacters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  
  
    digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
    specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "~", "`", "|", "\\", "/", ":", ";", ",", "."];
  
  
    alphabet = this.lowerCaseCharacters.concat(
      this.upperCaseCharacters,
      this.digits,
      this.specialCharacters,
    );
  
    snode = new AFDNode(
      "s",
      true,
      false,
      [],
    );
    node1 = new AFDNode(
      "q1",
      false,
      true,
      [],
    );
    
    start_transition = new AFDTransition(
      this.snode,
      this.snode,
      this.upperCaseCharacters.concat(this.digits, this.lowerCaseCharacters)
    );
  
    transition_S1 = new AFDTransition(
      this.snode,
      this.node1,
      this.specialCharacters
    );
  
    transition_11 = new AFDTransition(
      this.node1,
      this.node1,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );
  
  
    constructor() {
      
      this._states = [
        this.snode,
        this.node1,
      ];
  
      this._transitions = [
        this.start_transition,
        this.transition_S1,
        this.transition_11
      ];
  
      this.mapTransitions();
    }
  
    get states() {
      return this._states;
    }
  
    get transitions() {
      return this._transitions;
    }
    
  
    mapTransitions() {
      this.snode.transitions = [this.transitions[0], this.transitions[1]]
      this.node1.transitions = [this.transitions[2]]
    }
  
    
  }
  