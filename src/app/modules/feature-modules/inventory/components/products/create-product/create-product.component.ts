import { Component, OnInit } from "@angular/core";
import {FormGroup, FormBuilder, FormArray, Validators} from "@angular/forms";

@Component({
  selector: "ssb-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {

  myform : FormGroup ;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myform = this.fb.group({
        itemNames : this.fb.array([
           this.buildItemControl()
        ])
    });

  }
  private buildItemControl()  : FormGroup
  {
    return this.fb.group({
      name : ['', [Validators.required]],
      description : ['']
    });
  }
  addItemControl()
  {
    if(this.getFormArray.controls.length >=5)
    {
      return ;
    }
      this.getFormArray.push(this.buildItemControl());
  }
  get getFormArray() :FormArray
  {
      return this.myform
              .get("itemNames") as FormArray;
  }
}
