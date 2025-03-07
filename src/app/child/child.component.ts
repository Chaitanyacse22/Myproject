import { Component, ContentChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ContentChild ('projectedContent') content!:ElementRef

  // ngAfterContentInit(){
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   //Add 'implements AfterContentInit' to the class.
  //   this.content.nativeElement.style.backgroundColor='green';
  //   this.content.nativeElement.style.color='yellow';
  //   this.content.nativeElement.style.fontSize='50px';
    
  // }

  ngOnChanges(){
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges() -- When the input properties (@Input()) of a component change.')
  }
  constructor(){
    console.log('constructor...')
  }
  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngOnInit()... Initializing the component...')
  }
  ngDoCheck(){
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck() -- Invoked when the change detector of the component is invoked..')
  }
  ngAfterContentInit(){
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngDoCheck() -- After Angular Projects external content into the component...')
  }
  ngAfterContentChecked(){
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked() -- Angular checks content projection inside a component...')
  }
  ngAfterViewInit(){
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit() -- after the component's view and child views have been initialized...")
  }
  ngAfterViewChecked(){
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked() -- After the component's view and chils views have been checked...")
  }
  ngOnDestroy(){
    console.log("ngOnDestroy()...")
  }
  displayData(){
    alert("You clicked on a button");
  }

  @Input() strReceviedData! : string;
}
