(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dBb2:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),a=function(){return function(){}}(),o=t("pMnS"),i=t("Ip0R"),r=t("gIcY"),u=t("dJrM"),s=t("seP3"),c=t("Wf4p"),b=t("Fzqc"),d=t("dWZg"),g=t("wFw1"),m=t("b716"),p=t("/VYK"),f=t("bujt"),h=t("UodH"),_=t("lLAP"),x=t("oNRu"),C=function(){return function(){}}(),M=t("0I1l"),v=t("4qth"),z=t("kWWo"),O=function(){function n(n,l,t,e,a,o,i,r){this.userService=n,this.collabservice=l,this.conversation=t,this.router=e,this.mem_=a,this.userservie=o,this.collabSer=i,this.formBuilder=r,this.mess=new Array,this.allMess=new Array,this.OneToOneMess=new Array,this.OneToOneDate=new Array,this.OneToOneDisName=new Array,this.groupmess=new Array,this.alldata=new Array,this.partOf=!1,this.isOwner=!1,this.date=new Date,this.message=new C}return n.prototype.ngOnInit=function(){var n=this;this.form=this.formBuilder.group({message:[this.message.message,r.s.required]}),this.LoadMyMessages(),this.userservie.getUserdetails().subscribe(function(l){n.user=l.username})},n.prototype.getName=function(n){return n.substring(0,2).toUpperCase()},n.prototype.remove_duplicates=function(n){for(var l={},t=[],e=0;e<n.length;e++)l[n[e]]=!0;for(var a in l)t.push(a);return t},n.prototype.showTitle=function(){return null!=this.mem_.mem?this.getName(this.mem_.mem):null!=this.mem_.collabId?this.mem_.Title_:void this.router.navigate(["/home"])},n.prototype.SendMessage=function(){null!=this.mem_.mem?(console.log("sending message to "+this.mem_.mem),this.sendPersonalMessage()):null!=this.mem_.collabId?(console.log("sending message to "+this.mem_.collabId),this.SendGroupMessage()):this.router.navigate(["/home"])},n.prototype.sendPersonalMessage=function(){this.conversation.sendPersonalMessage(this.form.value,this.mem_.mem).subscribe(function(n){return console.log(n)})},n.prototype.SendGroupMessage=function(){this.conversation.sendMessageToCollabGroup(this.form.value,this.mem_.collabId).subscribe(function(n){return console.log(n)})},n.prototype.LoadMyMessages=function(){null!=this.mem_.mem?this.LoadIndividualMessage():null!=this.mem_.collabId?(this.collabID=this.mem_.collabId,this.LoadGroupMessage()):this.router.navigate(["/home"])},n.prototype.LoadIndividualMessage=function(){var n=this;null!=this.mem_.sender&&(console.log(this.mem_.sender),this.sender=this.mem_.sender,this.otherUser=this.mem_.mem);for(var l=0;l<4;l++)this.conversation.LoadOtherUserMessage(l,this.otherUser).subscribe(function(l){console.log(l);for(var t=0;t<l.length;t++){n.alldata=l[t];for(var e=0;e<l[t].messages.length;e++)n.OneToOneMess.push(l[t].messages[e])}n.OneToOneMess.reverse()})},n.prototype.LoadGroupMessage=function(){var n=this;this.collabID=this.mem_.collabId;for(var l=0;l<4;l++)this.conversation.LoadGroupMessage(l,this.collabID).subscribe(function(l){n.Title_=n.mem_.Title_;for(var t=0;t<l.length;t++)n.MessageId=l[0]._id.$oid,n.groupmess=l[t].messages,n.groupmess.reverse()})},n.prototype.isPartof=function(n,l){for(var t=0;t<l.length;t++)return l[t]==n},n}(),P=t("ZYCi"),y=e.pb({encapsulation:0,styles:[["ol[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;clear:both;padding:20px;border-radius:30px;margin-bottom:2px;font-family:Helvetica,Arial,sans-serif}.him[_ngcontent-%COMP%]{background:#eee;float:left}.me[_ngcontent-%COMP%]{float:right;background:#00f;color:#fff}.him[_ngcontent-%COMP%] + .me[_ngcontent-%COMP%]{border-bottom-right-radius:5px}.me[_ngcontent-%COMP%] + .me[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}.me[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:30px}.message[_ngcontent-%COMP%]{float:right;color:#fff;border-top-right-radius:5px;border-bottom-right-radius:5px}.message[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:30px}.messa[_ngcontent-%COMP%]{z-index:0;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:0;margin-left:80%}.navbar[_ngcontent-%COMP%]{z-index:inherit 0;background-color:#333;position:fixed;bottom:5px;max-width:800px}.messageSender[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%;background-color:#0084ff}.avatar[_ngcontent-%COMP%]{vertical-align:middle;width:50px;height:50px;border-radius:50%}.container-bottom[_ngcontent-%COMP%]{float:right;position:fixed;bottom:0}.container[_ngcontent-%COMP%]{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0}.container2[_ngcontent-%COMP%]{border:4px solid #dedede;background-color:plum;border-radius:5px;padding:10px;margin:10px 0;text-align:center}.darker[_ngcontent-%COMP%]{border-color:#ccc;background-color:#ddd}.container[_ngcontent-%COMP%]::after{content:\"\";clear:both;display:table}.right[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:0;font-size:10px}.left[_ngcontent-%COMP%]{float:left;margin-right:20px;margin-left:0;font-size:10px}.time-right[_ngcontent-%COMP%]{float:right;color:#aaa}.time-left[_ngcontent-%COMP%]{float:left;color:#999}.mat-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);border:.4px solid #3b3b3b;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);font-family:Georgia,'Times New Roman',Times,serif}.mat-card-header[_ngcontent-%COMP%]{font-weight:700;display:inline}.mat-card-title[_ngcontent-%COMP%]{margin-left:-16px;margin-right:-16px;margin-top:0;color:rgba(0,0,0,.836);background:rgba(34,34,34,.13);padding:5px}.mat-card-content[_ngcontent-%COMP%]{margin:0}.mat-card[_ngcontent-%COMP%] > .mat-card-actions[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 0 0 22px}.mat-expansion-panel[_ngcontent-%COMP%]{background:rgba(255,254,254,.151)}.requirements[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:20px;margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px}"]],data:{}});function B(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","me"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","right"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function k(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","him"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","left"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.message.message),n(l,5,0,l.parent.context.$implicit.dispName)})}function I(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"ol",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,B)),e.qb(2,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,k)),e.qb(4,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,l.context.$implicit.sender===t.sender),n(l,4,0,l.context.$implicit.sender!==t.sender)},null)}function w(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,4,"li",[["class","me"]],null,null,null,null,null)),(n()(),e.Ib(2,null,[" ",""])),(n()(),e.rb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"span",[["class","right"]],null,null,null,null,null)),(n()(),e.Ib(5,null,[" ",""]))],null,function(n,l){n(l,2,0,l.parent.parent.context.$implicit.message.message),n(l,5,0,l.parent.parent.context.$implicit.dispName)})}function q(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.Ib(1,null,[" ",""])),(n()(),e.rb(2,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,1,"span",[["class","left"]],null,null,null,null,null)),(n()(),e.Ib(4,null,[" ",""]))],null,function(n,l){n(l,1,0,l.parent.parent.parent.context.$implicit.message.message),n(l,4,0,l.parent.parent.parent.context.$implicit.dispName)})}function L(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"li",[["class","him"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,q)),e.qb(3,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,3,0,l.parent.parent.context.$implicit.message[l.component.message])},null)}function F(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,w)),e.qb(2,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.ib(16777216,null,null,1,null,L)),e.qb(4,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,l.parent.context.$implicit.sender===t.user),n(l,4,0,l.parent.context.$implicit.sender!==t.user)},null)}function N(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,2,"ol",[],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,F)),e.qb(2,16384,null,0,i.l,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.MessageId===t.collabID)},null)}function A(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,27,"form",[["class","navbar"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var a=!0,o=n.component;return"submit"===l&&(a=!1!==e.Bb(n,2).onSubmit(t)&&a),"reset"===l&&(a=!1!==e.Bb(n,2).onReset()&&a),"ngSubmit"===l&&(a=!1!==o.SendMessage()&&a),a},null,null)),e.qb(1,16384,null,0,r.v,[],null,null),e.qb(2,540672,null,0,r.h,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Fb(2048,null,r.b,null,[r.h]),e.qb(4,16384,null,0,r.n,[[4,r.b]],null,null),(n()(),e.rb(5,0,null,null,22,"mat-form-field",[["class","messa mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,u.b,u.a)),e.qb(6,7520256,null,7,s.c,[e.k,e.h,[2,c.f],[2,b.c],[2,s.a],d.a,e.A,[2,g.a]],null,null),e.Gb(335544320,1,{_control:0}),e.Gb(335544320,2,{_placeholderChild:0}),e.Gb(335544320,3,{_labelChild:0}),e.Gb(603979776,4,{_errorChildren:1}),e.Gb(603979776,5,{_hintChildren:1}),e.Gb(603979776,6,{_prefixChildren:1}),e.Gb(603979776,7,{_suffixChildren:1}),(n()(),e.rb(14,0,null,1,1,"p",[],null,null,null,null,null)),(n()(),e.Ib(15,null,["",""])),(n()(),e.rb(16,0,[["box",1]],1,7,"input",[["class","mat-input-element mat-form-field-autofill-control"],["formControlName","message"],["id","message"],["matInput",""],["placeholder","Enter message"],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],function(n,l,t){var a=!0;return"input"===l&&(a=!1!==e.Bb(n,17)._handleInput(t.target.value)&&a),"blur"===l&&(a=!1!==e.Bb(n,17).onTouched()&&a),"compositionstart"===l&&(a=!1!==e.Bb(n,17)._compositionStart()&&a),"compositionend"===l&&(a=!1!==e.Bb(n,17)._compositionEnd(t.target.value)&&a),"blur"===l&&(a=!1!==e.Bb(n,21)._focusChanged(!1)&&a),"focus"===l&&(a=!1!==e.Bb(n,21)._focusChanged(!0)&&a),"input"===l&&(a=!1!==e.Bb(n,21)._onInput()&&a),"keyup"===l&&(a=a),a},null,null)),e.qb(17,16384,null,0,r.c,[e.F,e.k,[2,r.a]],null,null),e.Fb(1024,null,r.k,function(n){return[n]},[r.c]),e.qb(19,671744,null,0,r.g,[[3,r.b],[8,null],[8,null],[6,r.k],[2,r.x]],{name:[0,"name"]},null),e.Fb(2048,null,r.l,null,[r.g]),e.qb(21,999424,null,0,m.a,[e.k,d.a,[6,r.l],[2,r.o],[2,r.h],c.b,[8,null],p.a,e.A],{id:[0,"id"],placeholder:[1,"placeholder"],type:[2,"type"]},null),e.qb(22,16384,null,0,r.m,[[4,r.l]],null,null),e.Fb(2048,[[1,4]],s.d,null,[m.a]),(n()(),e.rb(24,0,null,1,0,"div",[["class","alert alert-danger"]],null,null,null,null,null)),(n()(),e.rb(25,0,null,1,2,"button",[["class","right"],["color","primary"],["mat-raised-button",""],["type","submit"]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,f.d,f.b)),e.qb(26,180224,null,0,h.b,[e.k,d.a,_.j,[2,g.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(n()(),e.Ib(-1,0,["send"])),(n()(),e.rb(28,0,null,null,2,"div",[["class","mat-card"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,I)),e.qb(30,278528,null,0,i.k,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(31,0,null,null,2,"div",[["class","mat-card"]],null,null,null,null,null)),(n()(),e.ib(16777216,null,null,1,null,N)),e.qb(33,278528,null,0,i.k,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,2,0,t.form),n(l,19,0,"message"),n(l,21,0,"message","Enter message","text"),n(l,26,0,!t.form.valid,"primary"),n(l,30,0,t.OneToOneMess),n(l,33,0,t.groupmess)},function(n,l){n(l,0,0,e.Bb(l,4).ngClassUntouched,e.Bb(l,4).ngClassTouched,e.Bb(l,4).ngClassPristine,e.Bb(l,4).ngClassDirty,e.Bb(l,4).ngClassValid,e.Bb(l,4).ngClassInvalid,e.Bb(l,4).ngClassPending),n(l,5,1,["standard"==e.Bb(l,6).appearance,"fill"==e.Bb(l,6).appearance,"outline"==e.Bb(l,6).appearance,"legacy"==e.Bb(l,6).appearance,e.Bb(l,6)._control.errorState,e.Bb(l,6)._canLabelFloat,e.Bb(l,6)._shouldLabelFloat(),e.Bb(l,6)._hasFloatingLabel(),e.Bb(l,6)._hideControlPlaceholder(),e.Bb(l,6)._control.disabled,e.Bb(l,6)._control.autofilled,e.Bb(l,6)._control.focused,"accent"==e.Bb(l,6).color,"warn"==e.Bb(l,6).color,e.Bb(l,6)._shouldForward("untouched"),e.Bb(l,6)._shouldForward("touched"),e.Bb(l,6)._shouldForward("pristine"),e.Bb(l,6)._shouldForward("dirty"),e.Bb(l,6)._shouldForward("valid"),e.Bb(l,6)._shouldForward("invalid"),e.Bb(l,6)._shouldForward("pending"),!e.Bb(l,6)._animationsEnabled]),n(l,15,0,e.Bb(l,16).value),n(l,16,1,[e.Bb(l,21)._isServer,e.Bb(l,21).id,e.Bb(l,21).placeholder,e.Bb(l,21).disabled,e.Bb(l,21).required,e.Bb(l,21).readonly&&!e.Bb(l,21)._isNativeSelect||null,e.Bb(l,21)._ariaDescribedby||null,e.Bb(l,21).errorState,e.Bb(l,21).required.toString(),e.Bb(l,22).ngClassUntouched,e.Bb(l,22).ngClassTouched,e.Bb(l,22).ngClassPristine,e.Bb(l,22).ngClassDirty,e.Bb(l,22).ngClassValid,e.Bb(l,22).ngClassInvalid,e.Bb(l,22).ngClassPending]),n(l,25,0,e.Bb(l,26).disabled||null,"NoopAnimations"===e.Bb(l,26)._animationMode)})}function S(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-collab-messaging",[],null,null,null,A,y)),e.qb(1,114688,null,0,O,[x.a,v.a,M.a,P.k,z.a,x.a,v.a,r.d],null,null)],function(n,l){n(l,1,0)},null)}var G=e.nb("app-collab-messaging",O,S,{},{},[]),T=t("6UMx"),$=t("0/Q6"),j=t("Mr+X"),K=t("SMsm"),D=t("lzlj"),U=t("FVSy"),Q=function(){function n(n,l,t){this.collab=n,this.userservice=l,this.router=t,this.gropuMess=new Array,this.ContactList=new Array,this.user=null}return n.prototype.ngOnInit=function(){var n=this;this.collab.collabDetails().subscribe(function(l){n.collabData=l,console.log(l)}),this.userservice.getUserdetails().subscribe(function(l){n.user=l.username}),this.collab.myCollabs().subscribe(function(l){console.log(l);for(var t=0;t<l.length;t++)if(null!=l[t]._id&&null!=l[t]._id.$oid)console.log(l[t]._id.$oid),n.gropuMess.push(l[t]);else{if(!(0!=l[t].participants.length&&l[t].messages.length>0))return 0;console.log(l[t].participants);for(var e=0;e<l[t].participants.length;e++)l[t].participants[e]!=n.user&&n.ContactList.push(l[t].participants[e]);n.ContactList=n.remove_duplicates(n.ContactList)}})},n.prototype.remove_duplicates=function(n){for(var l={},t=[],e=0;e<n.length;e++)l[n[e]]=!0;for(var a in l)t.push(a);return t},n.prototype.extractFirstNameAndLastName=function(n){return n.split("@")[0]},n.prototype.groupMessageingPageLink=function(n){this.collabId=n,this.mem=null,console.log("Going to Group message "+this.collabId),console.log("member "+this.mem),this.router.navigateByUrl("/conversations")},n.prototype.PersonalmessagePageLink=function(n){this.mem=n,this.collabId=null,console.log("Going to message page of "+this.mem),console.log("CollabId "+this.collabId),this.router.navigateByUrl("/conversations")},n.prototype.getTitle=function(n){this.Title_=n,console.log("Showing title "+this.Title_)},n}(),R=e.pb({encapsulation:0,styles:[[".avatar[_ngcontent-%COMP%]{vertical-align:middle;width:50px;height:50px;border-radius:50%}.mat-card-avatar[_ngcontent-%COMP%]{background-image:url(/assets/userPhoto.png);vertical-align:middle;width:50px;height:50px;border-radius:50%}.container-bottom[_ngcontent-%COMP%]{float:right;position:fixed;bottom:0}.container[_ngcontent-%COMP%]{border:2px solid #dedede;background-color:#f1f1f1;border-radius:5px;padding:10px;margin:10px 0}.container2[_ngcontent-%COMP%]{border:4px solid #dedede;background-color:plum;border-radius:5px;padding:10px;margin:10px 0;text-align:center}.darker[_ngcontent-%COMP%]{border-color:#ccc;background-color:#ddd}.container[_ngcontent-%COMP%]::after{content:\"\";clear:both;display:table}.right[_ngcontent-%COMP%]{float:right;margin-left:20px;margin-right:0}.message[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}.time-right[_ngcontent-%COMP%]{float:right;color:#aaa}.time-left[_ngcontent-%COMP%]{float:left;color:#999}.mat-card[_ngcontent-%COMP%]{max-width:800px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);background-repeat:repeat-y;font-family:Georgia,'Times New Roman',Times,serif}.mat-card2[_ngcontent-%COMP%]{max-width:600px;margin:auto;padding:0;height:100%;background:rgba(214,212,212,.048);border:.4px solid #3b3b3b;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.mat-card-header[_ngcontent-%COMP%]{font-weight:700;display:inline}.mat-card-title[_ngcontent-%COMP%]{margin-left:-16px;margin-right:-16px;margin-top:0;color:rgba(0,0,0,.836);background:rgba(34,34,34,.13);padding:5px}.mat-card-content[_ngcontent-%COMP%]{margin:0}.mat-card[_ngcontent-%COMP%] > .mat-card-actions[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.mat-card-actions[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%], .mat-card-actions[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]{margin:0 0 0 22px}.mat-expansion-panel[_ngcontent-%COMP%]{background:rgba(255,254,254,.151)}.requirements[_ngcontent-%COMP%]{margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:20px;margin-left:30px;margin-right:30px}.content[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .duration[_ngcontent-%COMP%], .location[_ngcontent-%COMP%]{margin-left:40px;margin-right:40px}.table[_ngcontent-%COMP%]{width:100%;height:100%;overflow-x:auto;overflow-y:auto}.mat-list[_ngcontent-%COMP%]{height:100%}"]],data:{}});function E(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,11,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],null,null,T.c,T.b)),e.qb(1,1228800,null,3,$.c,[e.k,[2,$.f],[2,$.a],e.h],null,null),e.Gb(603979776,1,{_lines:1}),e.Gb(335544320,2,{_avatar:0}),e.Gb(335544320,3,{_icon:0}),(n()(),e.rb(5,0,null,0,4,"mat-icon",[["class","mat-icon notranslate mat-list-icon"],["mat-list-icon",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],[[null,"click"]],function(n,l,t){var a=!0;return"click"===l&&(a=!1!==e.Bb(n,6).onClick()&&a),a},j.b,j.a)),e.qb(6,16384,null,0,P.l,[P.k,P.a,[8,null],e.F,e.k],{routerLink:[0,"routerLink"]},null),e.qb(7,9158656,null,0,K.b,[e.k,K.d,[8,null],[2,K.a]],null,null),e.qb(8,16384,[[3,4]],0,$.b,[],null,null),(n()(),e.Ib(-1,0,["person"])),(n()(),e.rb(10,0,null,2,1,"button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.PersonalmessagePageLink(n.context.$implicit)&&e),e},null,null)),(n()(),e.Ib(11,null,[""," "]))],function(n,l){n(l,6,0,e.tb(1,"/user/",l.context.$implicit,"")),n(l,7,0)},function(n,l){var t=l.component;n(l,0,0,e.Bb(l,1)._avatar||e.Bb(l,1)._icon,e.Bb(l,1)._avatar||e.Bb(l,1)._icon),n(l,5,0,e.Bb(l,7).inline,"primary"!==e.Bb(l,7).color&&"accent"!==e.Bb(l,7).color&&"warn"!==e.Bb(l,7).color),n(l,11,0,t.extractFirstNameAndLastName(l.context.$implicit))})}function Y(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,8,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,7,"mat-card",[["class","mat-card"]],null,null,null,D.d,D.a)),e.qb(2,49152,null,0,U.a,[],null,null),(n()(),e.rb(3,0,null,0,1,"span",[],null,null,null,null,null)),(n()(),e.Ib(-1,null,["Contact List :"])),(n()(),e.rb(5,0,null,0,3,"mat-list",[["class","mat-list mat-list-base"]],null,null,null,T.d,T.a)),e.qb(6,704512,null,0,$.a,[e.k],null,null),(n()(),e.ib(16777216,null,0,1,null,E)),e.qb(8,278528,null,0,i.k,[e.Q,e.N,e.t],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,8,0,l.component.ContactList)},null)}function V(n){return e.Kb(0,[(n()(),e.rb(0,0,null,null,1,"app-messenger",[],null,null,null,Y,R)),e.qb(1,114688,null,0,Q,[v.a,x.a,P.k],null,null)],function(n,l){n(l,1,0)},null)}var W=e.nb("app-messenger",Q,V,{},{},[]),X=t("t68o"),Z=t("zbXB"),H=t("No7X"),J=t("bIR2"),nn=t("M2Lx"),ln=t("wmQ5"),tn=t("eDkP"),en=t("o3x0"),an=t("jQLj"),on=t("4tE/"),rn=t("qAlS"),un=t("Tq4R"),sn=t("rAFq"),cn=t("4D9t"),bn=t("bMPK"),dn=t("UiI2"),gn=function(){return function(){}}(),mn=t("ZYjt"),pn=t("4c35"),fn=t("La40"),hn=t("LC5p"),_n=t("YhbO"),xn=t("jlZm"),Cn=t("y4qS"),Mn=t("BHnd"),vn=t("/dO6"),zn=t("r43C"),On=t("Lwpp"),Pn=t("jRYl"),yn=t("KL2N"),Bn=t("QX+E"),kn=t("YSh2"),In=t("EFU/");t.d(l,"ConversationsModuleNgFactory",function(){return wn});var wn=e.ob(a,[],function(n){return e.yb([e.zb(512,e.j,e.db,[[8,[o.a,G,W,X.a,Z.b,Z.a,H.a,J.a]],[3,e.j],e.y]),e.zb(4608,i.n,i.m,[e.v,[2,i.z]]),e.zb(4608,nn.c,nn.c,[]),e.zb(4608,c.b,c.b,[]),e.zb(5120,ln.g,ln.a,[[3,ln.g]]),e.zb(4608,tn.a,tn.a,[tn.g,tn.c,e.j,tn.f,tn.d,e.r,e.A,i.d,b.c,[2,i.h]]),e.zb(5120,tn.i,tn.j,[tn.a]),e.zb(5120,en.c,en.d,[tn.a]),e.zb(135680,en.e,en.e,[tn.a,e.r,[2,i.h],[2,en.b],en.c,[3,en.e],tn.c]),e.zb(4608,an.h,an.h,[]),e.zb(5120,an.a,an.b,[tn.a]),e.zb(4608,c.a,c.u,[[2,c.e],d.a]),e.zb(5120,on.b,on.c,[tn.a]),e.zb(6144,b.b,null,[i.d]),e.zb(4608,b.c,b.c,[[2,b.b]]),e.zb(4608,d.a,d.a,[]),e.zb(5120,rn.f,rn.d,[[3,rn.f],e.A,d.a]),e.zb(5120,rn.k,rn.i,[[3,rn.k],d.a,e.A]),e.zb(4608,tn.g,tn.g,[rn.f,rn.k,e.A,i.d]),e.zb(5120,tn.c,tn.h,[[3,tn.c],i.d]),e.zb(4608,tn.f,tn.f,[rn.k,i.d]),e.zb(5120,tn.d,tn.k,[[3,tn.d],i.d]),e.zb(4608,tn.a,tn.a,[tn.g,tn.c,e.j,tn.f,tn.d,e.g,e.r,e.A,i.d]),e.zb(5120,tn.i,tn.j,[tn.a]),e.zb(4608,_.l,_.l,[d.a]),e.zb(4608,_.k,_.k,[_.l,e.A,i.d]),e.zb(136192,_.d,_.b,[[3,_.d],i.d]),e.zb(5120,_.o,_.n,[[3,_.o],[2,_.m],i.d]),e.zb(5120,_.j,_.h,[[3,_.j],e.A,d.a]),e.zb(5120,un.b,un.c,[tn.a]),e.zb(4608,un.d,un.d,[tn.a,e.r,[2,i.h],un.b,[2,un.a],[3,un.d],tn.c]),e.zb(4608,sn.a,sn.a,[]),e.zb(5120,cn.a,cn.b,[tn.a]),e.zb(6144,bn.b,null,[e.v]),e.zb(4608,bn.a,dn.a,[[2,bn.b]]),e.zb(4608,r.w,r.w,[]),e.zb(4608,r.d,r.d,[]),e.zb(1073742336,i.c,i.c,[]),e.zb(1073742336,P.m,P.m,[[2,P.s],[2,P.k]]),e.zb(1073742336,gn,gn,[]),e.zb(1073742336,b.a,b.a,[]),e.zb(1073742336,c.j,c.j,[[2,c.c],[2,mn.g]]),e.zb(1073742336,pn.g,pn.g,[]),e.zb(1073742336,d.b,d.b,[]),e.zb(1073742336,c.t,c.t,[]),e.zb(1073742336,nn.d,nn.d,[]),e.zb(1073742336,_.a,_.a,[]),e.zb(1073742336,fn.k,fn.k,[]),e.zb(1073742336,U.g,U.g,[]),e.zb(1073742336,K.c,K.c,[]),e.zb(1073742336,h.c,h.c,[]),e.zb(1073742336,c.k,c.k,[]),e.zb(1073742336,c.r,c.r,[]),e.zb(1073742336,hn.a,hn.a,[]),e.zb(1073742336,$.d,$.d,[]),e.zb(1073742336,_n.c,_n.c,[]),e.zb(1073742336,xn.d,xn.d,[]),e.zb(1073742336,Cn.o,Cn.o,[]),e.zb(1073742336,Mn.a,Mn.a,[]),e.zb(1073742336,rn.g,rn.g,[]),e.zb(1073742336,rn.e,rn.e,[]),e.zb(1073742336,vn.f,vn.f,[]),e.zb(1073742336,zn.b,zn.b,[]),e.zb(1073742336,On.e,On.e,[]),e.zb(1073742336,ln.h,ln.h,[]),e.zb(1073742336,s.e,s.e,[]),e.zb(1073742336,p.c,p.c,[]),e.zb(1073742336,m.b,m.b,[]),e.zb(1073742336,tn.e,tn.e,[]),e.zb(1073742336,en.h,en.h,[]),e.zb(1073742336,an.i,an.i,[]),e.zb(1073742336,c.v,c.v,[]),e.zb(1073742336,c.l,c.l,[]),e.zb(1073742336,c.o,c.o,[]),e.zb(1073742336,on.e,on.e,[]),e.zb(1073742336,b.a,b.a,[]),e.zb(1073742336,pn.g,pn.g,[]),e.zb(1073742336,d.b,d.b,[]),e.zb(1073742336,rn.e,rn.e,[]),e.zb(1073742336,tn.e,tn.e,[]),e.zb(1073742336,_.a,_.a,[]),e.zb(1073742336,Pn.a,Pn.a,[]),e.zb(1073742336,yn.a,yn.a,[]),e.zb(1073742336,Bn.a,Bn.a,[]),e.zb(1073742336,Bn.b,Bn.b,[]),e.zb(1073742336,r.t,r.t,[]),e.zb(1073742336,r.i,r.i,[]),e.zb(1073742336,r.q,r.q,[]),e.zb(1073742336,a,a,[]),e.zb(1024,P.i,function(){return[[{path:"",component:O},{path:"messenger",component:Q},{path:"conversations",component:O}]]},[]),e.zb(256,vn.a,{separatorKeyCodes:[kn.g]},[]),e.zb(256,c.d,c.g,[]),e.zb(256,In.a,Bn.c,[])])})}}]);