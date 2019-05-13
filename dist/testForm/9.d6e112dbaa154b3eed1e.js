(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7UCR":function(t,n,e){"use strict";e.r(n);var i=e("mrSG"),a=e("o3x0"),s=e("jlZm"),o=e("gIcY"),l=e("4tE/"),r=e("/dO6"),c=e("qAlS"),d=e("V9q+"),p=e("CcnG"),u=e("Ip0R"),m=e("ZYCi"),h=e("oNRu"),g=function(){function t(t,n,e){this.userService=t,this.dialogRef=n,this.data=e,this.fileToUpload=null,this.submitPressed=!1}return t.prototype.ngOnInit=function(){},t.prototype.handleFileInput=function(t){this.fileToUpload=t.item(0)},t.prototype.uploadFileToActivity=function(){return i.b(this,void 0,void 0,function(){return i.e(this,function(t){switch(t.label){case 0:return[4,this.userService.uploadProfilePicture(this.fileToUpload).subscribe(function(t){console.log(t)})];case 1:return t.sent(),this.submitPressed=!0,this.dialogRef.close(this.submitPressed),[2]}})})},t=i.c([Object(p.n)({selector:"app-edit-picture",template:e("k1TJ"),styles:[e("AVKL")]}),i.g(2,Object(p.B)(a.a)),i.f("design:paramtypes",[h.a,a.d,Object])],t)}(),f=e("4qth"),b=e("YSh2"),v=e("p0Sj"),x=e("Gi3i"),k=e("ad02"),y=e("15JJ"),w=function(){function t(t,n,e,i){this.userService=t,this.collabService=n,this.dialogRef=e,this.data=i,this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[b.g,b.c],this.skillCtrl=new o.b,this.skills=[],this.allSkills=[]}return t.prototype.ngOnInit=function(){var t=this;this.skills=this.data.userData.skills,this.skillCtrl.valueChanges.pipe(Object(v.a)(null),Object(x.a)(200),Object(k.a)(),Object(y.a)(function(n){return t.userService.searchSkills(n)})).subscribe(function(n){return t.filteredSkills=n.matches})},t.prototype.addSkill=function(t){if(!this.matAutocomplete1.isOpen){var n=t.input,e=t.value;(e||"").trim()&&this.skills.push(e.trim()),n&&(n.value=""),this.skillCtrl.setValue(null)}},t.prototype.removeSkill=function(t){var n=this.skills.indexOf(t);n>=0&&this.skills.splice(n,1)},t.prototype.selectedSkill=function(t){this.skills.push(t.option.viewValue),this.skillInput.nativeElement.value="",this.skillCtrl.setValue(null)},t.prototype.update=function(){this.userService.updateUserSkills(this.skills).subscribe(function(t){console.log(t)}),this.dialogRef.close()},i.c([Object(p.mb)("skillInput"),i.f("design:type",p.u)],t.prototype,"skillInput",void 0),i.c([Object(p.mb)("auto"),i.f("design:type",l.a)],t.prototype,"matAutocomplete1",void 0),t=i.c([Object(p.n)({selector:"app-edit-skills",template:e("f6MB"),styles:[e("WKsk")]}),i.g(3,Object(p.B)(a.a)),i.f("design:paramtypes",[h.a,f.a,a.d,Object])],t)}(),C=function(){function t(t,n,e){this.userService=t,this.dialogRef=n,this.data=e,this.visible=!0,this.selectable=!0,this.removable=!0,this.addOnBlur=!0,this.separatorKeysCodes=[b.g,b.c],this.classCtrl=new o.b,this.classes=[],this.allClasses=[]}return t.prototype.ngOnInit=function(){var t=this;this.classes=this.data.userData.classes,this.classCtrl.valueChanges.pipe(Object(v.a)(null),Object(x.a)(200),Object(k.a)(),Object(y.a)(function(n){return t.userService.searchClasses(n)})).subscribe(function(n){return t.filteredClasses=n.matches})},t.prototype.addClass=function(t){if(!this.matAutocomplete2.isOpen){var n=t.input,e=t.value;(e||"").trim()&&this.classes.push(e.trim()),n&&(n.value=""),this.classCtrl.setValue(null)}},t.prototype.removeClass=function(t){var n=this.classes.indexOf(t);n>=0&&this.classes.splice(n,1)},t.prototype.selectedClass=function(t){this.classes.push(t.option.viewValue),this.classInput.nativeElement.value="",this.classCtrl.setValue(null)},t.prototype.update=function(){this.userService.updateUserclass(this.classes).subscribe(function(t){console.log(t)}),this.dialogRef.close()},i.c([Object(p.mb)("classInput"),i.f("design:type",p.u)],t.prototype,"classInput",void 0),i.c([Object(p.mb)("auto2"),i.f("design:type",l.a)],t.prototype,"matAutocomplete2",void 0),t=i.c([Object(p.n)({selector:"app-edit-classes",template:e("iZew"),styles:[e("Z9lN")]}),i.g(2,Object(p.B)(a.a)),i.f("design:paramtypes",[h.a,a.d,Object])],t)}(),S=function(){function t(t,n,e,i){this.userService=t,this._formBuilder=n,this.dialogRef=e,this.data=i}return t.prototype.ngOnInit=function(){},t.prototype.update=function(t){this.userService.updateUserProfile(t).subscribe(function(t){console.log(t)}),this.dialogRef.close()},t=i.c([Object(p.n)({selector:"app-edit-user-form",template:e("lqP4"),styles:[e("jEzF")]}),i.g(3,Object(p.B)(a.a)),i.f("design:paramtypes",[h.a,o.a,a.d,Object])],t)}(),O=function(){function t(t,n,e,i,a){this.userService=t,this.router=n,this.formBuilder=e,this.activeRoute=i,this.dialog=a,this.filteredUsers=[],this.isLoading=!1,this.fileToUpload=null}return t.prototype.ngOnInit=function(){return i.b(this,void 0,void 0,function(){var t=this;return i.e(this,function(n){switch(n.label){case 0:return[4,this.activeRoute.paramMap.subscribe(function(n){t.username=n.get("username")})];case 1:return n.sent(),[4,this.userService.getUserdetails().subscribe(function(n){n.username===t.username||null==t.username?t.canEdit=!0:t.canEdit=!1})];case 2:return n.sent(),this.loadUserData(this.username),[2]}})})},t.prototype.loadUserData=function(t){var n=this;t?(this.userService.getMemberdetails(t).subscribe(function(t){n.userData=t,n.userClass=t.classes,n.userSkill=t.skills}),this.profileMemberPicture(t)):(this.userService.getUserdetails().subscribe(function(t){n.userData=t,n.userClass=t.classes,n.userSkill=t.skills}),this.profilePicture())},t.prototype.profilePicture=function(){var t=this;this.userService.getPicture().subscribe(function(n){console.log(n),t.imageLink="http://"+n,console.log(t.imageLink)})},t.prototype.profileMemberPicture=function(t){var n=this;this.userService.getMemberPicture(t).subscribe(function(t){n.imageLink="http://"+t})},t.prototype.openDialog1=function(){this.dialog.open(S,{width:"50%",data:{userData:this.userData}}).afterClosed().subscribe(function(t){console.log("The dialog was closed")})},t.prototype.openDialog2=function(){this.dialog.open(C,{width:"95%",data:{userData:this.userData}}).afterClosed().subscribe(function(t){console.log("The dialog was closed")})},t.prototype.openDialog3=function(){this.dialog.open(w,{width:"70%",data:{userData:this.userData}}).afterClosed().subscribe(function(t){console.log("The dialog was closed")})},t.prototype.openDialog4=function(){this.dialog.open(g,{width:"280px",data:{userData:this.userData}}).afterClosed().subscribe(function(t){console.log("The dialog was closed"+t)})},t.prototype.changeProfilePic=function(){console.log("Change profile pic.")},t.prototype.onNavigateGithub=function(){window.open("https://"+this.userData.github,"_blank")},t.prototype.onNavigateLinkedIn=function(){window.open("https://"+this.userData.linkedin,"_blank")},t=i.c([Object(p.n)({selector:"app-user-page",template:e("IPuP"),styles:[e("CFJd")]}),i.f("design:paramtypes",[h.a,m.b,o.a,m.a,a.b])],t)}(),I=[{path:":username",component:O},{path:"",component:O}],D=function(){function t(){}return t=i.c([Object(p.K)({imports:[m.c.forChild(I)],exports:[m.c]})],t)}(),j=e("UodH"),P=e("FVSy"),U=e("SMsm"),F=e("La40"),L=e("b716"),A=e("r43C"),M=e("0/Q6");e.d(n,"UserModule",function(){return B});var B=function(){function t(){}return t=i.c([Object(p.K)({declarations:[O,S,C,w,g],imports:[u.b,D,F.a,P.a,U.a,j.a,L.b,A.a,M.a,c.b,r.a,l.b,a.c,s.a,a.c,d.a,o.d,o.i],entryComponents:[S,C,w,g]})],t)}()},AVKL:function(t,n){t.exports=".hide_file {\n    position: absolute;\n    z-index: 1000;\n    opacity: 0;\n    cursor: pointer;\n    right: 0;\n    top: 0;\n    height: 100%;\n    font-size: 24px;\n    width: 100%;\n}\n\n.mat-button {\n    border: 1px solid royalblue;\n}\n\n.uploadPic{\n    position:relative;\n    text-align:center;\n    float:left;\n    cursor:pointer;\n    margin-left: 10%;\n  }\n\n  \n  "},CFJd:function(t,n){t.exports=".usercard1 {\n  margin-top: 30px;\n  padding: 0px;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.mat-card-avatar {\n  background-image: url('/assets/userPhoto.png');\n  background-size: cover;\n\n}\n\n.mat-card-actions {\n  display: flex;\n}\n\n.list-header-title {\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nfont-weight: bold;\npadding: 0px;\n\n}\n\n.mat-card-header {\n  padding-left: 10px;\n  padding-top: 10px; \n}\n\n.mat-raised-button {\n  width: 100%;\n  height: 100%;\n}\n\n.usercard2 {\nmargin-top: 30px;\ncolor: rgba(0, 0, 0, .54);\nbackground: rgba(0, 0, 0, 0.062);\nheight: 86.5%;\npadding-bottom: 25px;\nborder-radius: 5px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.viewport {\nwidth: 100%;\nheight: 100%;\nmargin-left: 40px;\nbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.cdk-virtual-scroll-viewport {\nheight: 70%;\nmargin: 0px;\nbackground-color: white;\n\n}\n\n.example-form .mat-form-field {\nmargin: 0px;\n}\n\n.mat-list {\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-container {\ngrid: auto-flow / 1fr;\nwidth: 100%;\nheight: 100%;\n}\n\n.grid-search {\ngrid-area: grid-search;\nmargin-left: 25px;\n\n}\n\n.grid-item {\ngrid-area: grid-item;\nheight: 100%;\nmargin-left: 25px;\nmargin-right: 25px;\nmargin-bottom: 0px;\n}\n\n.mat-chip-list {\nmargin: 1px;\n}\n\n.example-form {\nmin-width: 150px;\nmax-width: 500px;\nwidth: 100%;\n}\n\n.example-full-width {\nwidth: 80%;\nmargin-top: 15px;\nmargin-bottom: 15px;\nbackground: rgba(255, 255, 255, 0.671);\nborder-radius: 15px;\n}\n\n.wrapper {\ndisplay:inline-block;\nmargin-top: 10px;\nmargin-bottom: 15px;\nheight: 30px;\n}\n\ninput {\n    background-color: white;\n    border: 3;\n    width: 200px;\n    height: 30px;\n}\n\nbutton {\n    \n    border: solid black 1px;\n    width: 100px;\n    height: 38px;\n}\n\n.mat-flat-button  {\n  width: auto;\n  margin-left: auto;\n  margin-right: 10px; \n}\n\n.uploadButton {\n  height: 38px;\n}\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.containerPic:hover .image {\n  opacity: 0.3;\n}\n\n.containerPic:hover .middle {\n  opacity: 1;\n}\n\n.image-background {\n  background: #555555;\n  display: table;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.containerPic {\n  position: relative;\n}\n\n.mat-card-image {\nmargin: 0px;\nmargin-left: 8.099%;\nmargin-right: 10%;\ndisplay: block;\nheight: 490px;\nmax-height: 500px;\nmax-width: 85%;\ntransition: .5s ease;\n-webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\nopacity: 1;\n}\n\n.mat-grid-tile {\n  overflow: unset;\n}\n"},IPuP:function(t,n){t.exports='\x3c!--\n  fxLayout.lt-sm="column"  : Will only be applied when the viewport is less thatn small.\n  fxLayout = "row"         : If ;using big screens, display data in rows\n  fxLayout.xs ="column" ;  : using small screens, display data in columns\n  fxLayoutWrap             : Will wrap this div for us so that flex will be applied\n  fxLayoutGap = 20%;       : Will give us a gap bewteen each fxFlex\n--\x3e\n  <div class = "container" fxLayout = "row" fxLayout.xs = "column" fxLayoutWrap fxLayoutAlign="center">\n\n    <div fxFlex = "40%" fxFlex.xs = "80%">\n        <mat-card class="usercard1">\n          \n                <mat-card-header class="list-header-title">\n\n                    <div mat-card-avatar></div>\n                      <mat-card-title>{{ userData?.name }}</mat-card-title>\n                      <mat-card-subtitle>{{ userData?.username }}</mat-card-subtitle>\n                      <button mat-flat-button color="primary" (click) = "openDialog1()" *ngIf="canEdit">Edit</button>\n              \n                </mat-card-header>  \n\n              \n                <div class="containerPic">\n                  <div class="image-background">\n                      <div class="image-container">\n                          <img mat-card-image [src] = "imageLink"\n                          onerror="this.onerror=null; this.src = \'assets/userPhoto.png\';"\n                           class="image">\n                          </div> \n                          <div class="middle"  *ngIf="canEdit">\n                            <button mat-raised-button class="text" (click) = "openDialog4()">Change Picture</button>\n                      </div>\n                  </div>  \n                </div>\n\n                \x3c!--img mat-card-image --\x3e\n                <mat-card-content>\n                \n                <mat-grid-list cols="2" rowHeight="4:1" class="user-links">\n                    <mat-grid-tile>\n                          <button mat-raised-button color="warm" (click) = "onNavigateGithub()" >{{ userData?.github }}</button>\n                    </mat-grid-tile>\n                    \n                    <mat-grid-tile>\n                        <button mat-raised-button color="primary" (click) = "onNavigateLinkedIn()">{{ userData?.linkedin }}</button>\n                    </mat-grid-tile>\n                </mat-grid-list>\n\n              </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div fxFlex = "40%" fxFlex.xs = "80%">\n      <div class="usercard2">\n        <mat-grid-list cols="1" rowHeight="2:1">\n          \x3c!-- Will hold class list --\x3e\n            <mat-grid-tile>\n            <div class ="grid-container">  \n              <div class = "grid-search">\n                  <div class="wrapper">\n                      <button (click) = "openDialog2()" mat-flat-button color="primary" *ngIf="canEdit"> Update </button>\n                  </div>\n              </div>\n              \n              <div class = "grid-item">\n                  <cdk-virtual-scroll-viewport itemSize="classes.size" class="viewport">\n                      <mat-chip-list>\n                        <mat-chip *ngFor = "let class of userData?.classes">\n                          {{ class }}\n                        </mat-chip>\n                      </mat-chip-list>\n                    </cdk-virtual-scroll-viewport>\n                </div>\n            </div>    \n            </mat-grid-tile>\n            <br>\n            <br>\n            <br>\n          \x3c!-- Will hold the skill list --\x3e\n          <mat-grid-tile>\n              <div class ="grid-container">  \n                  <div class = "grid-search">\n                      <div class="wrapper">\n                          <button (click) = "openDialog3()" mat-flat-button color="primary" *ngIf="canEdit"> Update </button>\n                      </div>\n                  </div>\n                  <div class = "grid-item">\n                      <cdk-virtual-scroll-viewport itemSize="skills.size" class="viewport">\n                          <mat-chip-list>\n                            <mat-chip *ngFor = "let skill of userData?.skills">\n                              {{ skill }}\n                            </mat-chip>  \n                          </mat-chip-list>\n                        </cdk-virtual-scroll-viewport>\n                    </div>\n                </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </div>\n    </div>\n  </div>'},WKsk:function(t,n){t.exports=".example-chip-list {\n    width: 100%;\n}"},Z9lN:function(t,n){t.exports=".example-chip-list {\n    width: 100%;\n}"},f6MB:function(t,n){t.exports='<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class="example-chip-list">\n    <mat-chip-list #chipListSkills>\n            <mat-chip\n            *ngFor="let skill of skills"\n            [selectable]="selectable"\n            [removable]="removable"\n            (removed)="removeSkill(skill)">\n            {{ skill }}\n            <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>\n            </mat-chip>\n            <input\n            placeholder="New Skill..."\n            #skillInput\n            [formControl]="skillCtrl"\n            [matAutocomplete]="auto"\n            [matChipInputFor]="chipListSkills"\n            [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n            [matChipInputAddOnBlur]="addOnBlur"\n            (matChipInputTokenEnd)="addSkill($event)">\n            <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selectedSkill($event)">\n                    <mat-option *ngFor="let skill of filteredSkills" [value]="skill">\n                    {{ skill }}\n                    </mat-option>\n            </mat-autocomplete>\n    </mat-chip-list>             \n</mat-form-field>\n<br>\n  <button mat-raised-button (click) = "update()">Update</button>\n<br>\n'},iZew:function(t,n){t.exports='<h2 mat-dialog-title> Update User Details </h2>\n<mat-form-field class="example-chip-list">\n        <mat-chip-list #chipListClasses>\n                <mat-chip\n                *ngFor = "let class of classes"\n                [selectable] = "selectable"\n                [removable] = "removable"\n                (removed) = "removeClass(class)">\n                {{ class }}\n                <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>\n                </mat-chip>\n                <input \n                placeholder="New Class..."\n                #classInput\n                [formControl]="classCtrl"\n                [matAutocomplete]="auto2"\n                [matChipInputFor]="chipListClasses"\n                [matChipInputSeparatorKeyCodes]="separatorKeysCodes"\n                [matChipInputAddOnBlur]="addOnBlur"\n                (matChipInputTokenEnd)="addClass($event)">\n                <mat-autocomplete #auto2="matAutocomplete" (optionSelected)="selectedClass($event)">\n                        <mat-option *ngFor="let class of filteredClasses" [value]="class">\n                        {{ class }}\n                        </mat-option>\n                </mat-autocomplete>\n        </mat-chip-list>\n</mat-form-field>\n<br>\n        <button mat-raised-button (click) = "update()">Update</button>\n<br>\n\n'},jEzF:function(t,n){t.exports=".mat-form-field {\n    width: 95%;\n}"},k1TJ:function(t,n){t.exports=' \x3c!--Taking picture as input--\x3e\n <div class = "container">\n    <div class="uploadPic">\n        <input  type="file" class="hide_file" (change)="handleFileInput($event.target.files)">\n        <button mat-flat-button color="primary" >Upload File</button> \n    </div>\n    <button class="uploadButton" mat-button color="primary" (click)="uploadFileToActivity()">submit</button>\n</div>\n'},lqP4:function(t,n){t.exports='<h2 mat-dialog-title> Update User Details </h2>\n    <div class = "container">\n        \x3c!-- Template Driven Form: Angular uses these fields and apply a form-level directive to the form, craeting\n                                    a FormGroup and linking it to the form.\n                [(ngModel)] two-way(bi-directional) binding to allow for sync of form fields and view model\n                controller: data, which was passed down from user-page component, of type UserModel will control the fields\n        --\x3e\n        <form #form = "ngForm" (ngSubmit) = "update(form.value)">\n        \n            <mat-form-field>\n                <input [(ngModel)] = "data.userData[\'name\']" name = "username" id = "username" type = "text" class = "form-control"\n                    #username = "ngModel" matInput placeholder = "User Name..." required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = "data.userData[\'github\']" name = "github" id = "github" type = "text" class = "form-control"\n                    #github = "ngModel" matInput placeholder = "Github..." required>\n            </mat-form-field>\n            <br>\n            <mat-form-field>\n                <input [(ngModel)] = "data.userData[\'linkedin\']" name = "linkedin" id = "linkedin" type = "text" class = "form-control"\n                    #linkedin = "ngModel" matInput placeholder = "LinkedIn..." required>\n            </mat-form-field>\n            <br>\n            <button mat-raised-button>Update</button>\n            <br>\n        </form>\n      </div>\n      \n'}}]);