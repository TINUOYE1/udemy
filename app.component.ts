import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  project_status = ['stable', 'critical', 'finished']

  forbiddenNames = ['test'];

  testForbiddenNames = ['testForbidden'];

  projectRegForm : FormGroup;

  ngOnInit(): void {
    this.projectRegForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName.bind(this)], this.testForbiddenAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable', Validators.required)
    })

    
  }

  forbiddenProjectName(control: FormControl): {[s: string] : boolean}{
    if(this.forbiddenNames.indexOf(control.value) !== -1) {
      return {['InvalidProjectName'] : true};
    }
    return null;
    

  }

  testForbiddenAsync(control: FormControl): Promise<any> | Observable<any>{
   const promise = new Promise ((resolve, reject) => {
     setTimeout(() => {
       if (control.value === 'testforbidden'){
         resolve({['InvalidProjectName'] : true});
       }else{
         resolve(null)
       }
     }, 2000)
   })
   return promise;
  }

  onCreateProject(){
    console.log(this.projectRegForm.value)
  }
    
}