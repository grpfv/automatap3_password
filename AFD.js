class AFD {
  static validateStepState = {
    PASS: 0,
    NOT_VALIDATED: -1,
    VALIDATED: 1,
  };

  constructor(alphabet, initialState, finalStates, transitions, states) {
    this._char = "";
    this._alphabet = alphabet;
    this._initialState = initialState;
    this._currentState = initialState;
    this._finalStates = finalStates;
    this._transitions = transitions;
    this._states = states;
  }

  get currentState() {
    return this._currentState;
  }

  get initialState() {
    return this._initialState;
  }

  get finalStates() {
    return this._finalStates;
  }

  get transitions() {
    return this._transitions;
  }

  set char(char) {
    this._char = char;
  }

  setCurrentState(state) {
    this._currentState = state;
    this._currentState.isActive = true;
  }

  check(string) {
      this.setCurrentState(this._initialState);
    
      for (let i = 0; i < string.length; i++) {
        let char = string[i];
    
        if (this.inAlphabet(char)) {
          let transitionFound = false;
    
          for (let t = 0; t < this._currentState.transitions.length; t++) {
            let transition = this._currentState.transitions[t];
    
            if (transition.hasValue(char)) {
              this.setCurrentState(transition.toNode);
              transitionFound = true;
              break;
            }
          }
    
          if (!transitionFound) {
            return { isValid: false };
          }
        } else {
          return { isValid: false };
        }
      }
    
      return { isValid: this._currentState.isFinal };
    }
    
  
  inAlphabet(char) {
    for (let i = 0; i < this._alphabet.length; i++) {
      if (this._alphabet[i].includes(char.toLowerCase())) {
        return true;
      }
    }
    return false;
  }
}
