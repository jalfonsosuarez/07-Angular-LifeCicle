import {
  afterNextRender,
  afterRender,
  Component,
  effect,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  traditionalProperty = 'José Alfonso';
  signalProperty = signal('José Alfonso');

  constructor() {
    log('Constructor llamado.');

    // setTimeout(() => {
    //   this.traditionalProperty = 'Otro nombre';
    //   this.signalProperty.set('Aquí se cambió.');
    //   console.log('Hecho');
    // }, 2000);
  }

  changeTraditional() {
    this.traditionalProperty = 'José Alfonso Suárez';
  }

  changeSignal() {
    this.signalProperty.set('José Alfonso Suárez');
  }

  basicEffect = effect((onCleanUp) => {
    log('effect', 'Disparar efectos secundarios.');
    onCleanUp(() => {
      log('onCleanUp', 'Se ejecuta cuendo el effect se va a destruir.');
    });
  });

  ngOnInit() {
    log(
      'ngOnInit',
      "Runs once after Angular has initialized all the component's inputs."
    );
  }
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.");
  }
  ngDoCheck() {
    log('ngDoCheck', 'Runs every time this component is checked for changes.');
  }
  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      "Runs once after the component's content has been initialized."
    );
  }
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Runs every time this component content has been checked for changes.'
    );
  }
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      "Runs once after the component's view has been initialized."
    );
  }
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      "Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    log('ngOnDestroy', 'Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  afterRender = afterRender(() => {
    log(
      'afterRender',
      'Runs once the next time that all components have been rendered to the DOM.'
    );
  });
}
