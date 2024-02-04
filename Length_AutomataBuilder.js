class AutomataBuilder_lenght{
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
      false,
      [],
    );
    node2 = new AFDNode(
      "q2",
      false,
      false,
      [],
    );
    node3 = new AFDNode(
      "q3",
      false,
      false,
      [],
    );
    node4 = new AFDNode(
      "q4",
      false,
      false,
      [],
    );
    node5 = new AFDNode(
      "q5",
      false,
      false,
      [],
    );
    node6 = new AFDNode(
      "q6",
      false,
      false,
      [],
    );
    node7 = new AFDNode(
      "q7",
      false,
      true,
      [],
    );
  
    start_transition = new AFDTransition(
      this.snode,
      this.node1,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters)
    );
  
    transition_12 = new AFDTransition(
      this.node1,
      this.node2,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters)
    );

    transition_23 = new AFDTransition(
      this.node2,
      this.node3,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );
    
    transition_34 = new AFDTransition(
      this.node3,
      this.node4,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );

    transition_45 = new AFDTransition(
      this.node4,
      this.node5,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );

    transition_56 = new AFDTransition(
      this.node5,
      this.node6,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );

    transition_67 = new AFDTransition(
      this.node6,
      this.node7,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters),
    );

    transition_77 = new AFDTransition(
      this.node7,
      this.node7,
      this.lowerCaseCharacters.concat(this.upperCaseCharacters, this.digits, this.specialCharacters)
    );
  
    constructor() {
      this._states = [
        this.snode,
        this.node1,
        this.node2,
        this.node3,
        this.node4,
        this.node5,
        this.node6,
        this.node7
      ];
  
      this._transitions = [
        this.start_transition,
        this.transition_12,
        this.transition_23,
        this.transition_34,
        this.transition_45,
        this.transition_56,
        this.transition_67,
        this.transition_77
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
      this.snode.transitions = [this.transitions[0]]
      this.node1.transitions = [this.transitions[1]]
      this.node2.transitions = [this.transitions[2]]
      this.node3.transitions = [this.transitions[3]]
      this.node4.transitions = [this.transitions[4]]
      this.node5.transitions = [this.transitions[5]]
      this.node6.transitions = [this.transitions[6]]
      this.node7.transitions = [this.transitions[7],this.transitions[8]]
    }
  
    
  }
  