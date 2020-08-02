import {StemmableNote} from "./stemmablenote";
import {Flow} from "./tables";
import {Vex} from "./vex";
import {Dot} from "./dot";

/**
 * 1. Convert Font SimpErhu into graph library
 * 2. the numbered note note_type defined to c(hina)
 *
 */
export class NumberedNote extends StemmableNote {
  static get CATEGORY() { return 'numberednote'; }
  constructor(note_struct) {
    super(note_struct)
    this.setAttribute('type', 'NumberedNote');
    //todo 将符号加入到graph table之中
    this.glyph = Flow.durationToGlyph(this.duration, this.noteType);
    if (!this.glyph) {
      throw new Vex.RuntimeError(
        'BadArguments',
        `Invalid note initialization data (No glyph found): ${JSON.stringify(tab_struct)}`
      );
    }
  }

  //todo
  reset() {}
  getCategory() { return TabNote.CATEGORY; }
  addDot() {
    const dot = new Dot();
    this.dots += 1;
    return this.addModifier(dot, 0);
  }
  //todo
  updateWidth() {

  }
  //todo
  setStave(stave) {

  }

  //todo
  addToModifierContext(mc) {

  }

  //todo
  getTieRightX() {

  }

  //todo
  getTieLeftX() {

  }
  //todo
  getModifierStartXY(position,index) {

  }
  preFormat() {

  }
  // todo
  draw() {

  }
}
