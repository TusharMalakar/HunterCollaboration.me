(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4qth":function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("mrSG"),o=i("t/Na"),r=i("CcnG"),a=function(){function t(t){this.http=t,this.rootUrl="http://13.58.204.157:5000"}return t.prototype.collabDetails=function(){return this.http.get(this.rootUrl+"/collab/getCollabDetails")},t.prototype.allCollabs=function(){return this.http.get(this.rootUrl+"/collab/getAllCollabs")},t.prototype.activeCollabs=function(){return this.http.get(this.rootUrl+"/collab/getActiveCollabs")},t.prototype.myCollabs=function(){return this.http.get(this.rootUrl+"/messaging/myConvos")},t.prototype.getCollabs=function(t){return this.http.get(this.rootUrl+"/collab/"+t)},t.prototype.getSingleCollab=function(t){var e={id:t};return this.http.post(this.rootUrl+"/collab/getCollab",e)},t.prototype.createCollab=function(t){var e={size:t.size,date:t.date,duration:t.duration,location:t.location,title:t.title,description:t.description,classes:t.classes,skills:t.skills};return this.http.post(this.rootUrl+"/collab/createCollab",e)},t.prototype.joinCollab=function(t){var e={id:t.$oid};return this.http.post(this.rootUrl+"/collab/joinCollab",e)},t.prototype.leaveCollab=function(t){var e={id:t.$oid};return this.http.post(this.rootUrl+"/collab/leaveCollab",e)},t.prototype.deleteCollab=function(t){var e={id:t.$oid};return this.http.request("delete",this.rootUrl+"/collab/deleteCollabForReal",{body:e})},t.prototype.getReqCollabs=function(t,e){var i={classes:t,skills:e};return this.http.post(this.rootUrl+"/collab/getRecommendedCollabs",i)},t.prototype.editCollab=function(t,e){var i=new Date(t.date).getTime(),n=new Date(t.duration).getTime(),o={id:t._id,size:t.size,date:i,duration:n,location:t.location,title:t.title,description:t.description,classes:t.classes,skills:t.skills,applicants:t.applicants};return this.http.post(this.rootUrl+"/collab/editCollab",o)},t=n.c([Object(r.C)({providedIn:"root"}),n.f("design:paramtypes",[o.b])],t)}()},jlZm:function(t,e,i){"use strict";var n=i("CcnG"),o=i("ihYY"),r=i("mrSG"),a=i("n6gG"),s=i("K9Ia"),l=i("pugT"),p=i("YlbQ"),d=0,c=function(){function t(){this._stateChanges=new s.a,this._openCloseAllActions=new s.a,this.id="cdk-accordion-"+d++,this._multi=!1}return Object.defineProperty(t.prototype,"multi",{get:function(){return this._multi},set:function(t){this._multi=Object(a.c)(t)},enumerable:!0,configurable:!0}),t.prototype.openAll=function(){this._openCloseAll(!0)},t.prototype.closeAll=function(){this._openCloseAll(!1)},t.prototype.ngOnChanges=function(t){this._stateChanges.next(t)},t.prototype.ngOnDestroy=function(){this._stateChanges.complete()},t.prototype._openCloseAll=function(t){this.multi&&this._openCloseAllActions.next(t)},t.decorators=[{type:n.t,args:[{selector:"cdk-accordion, [cdkAccordion]",exportAs:"cdkAccordion"}]}],t.propDecorators={multi:[{type:n.F}]},t}(),h=0,g=function(){function t(t,e,i){var o=this;this.accordion=t,this._changeDetectorRef=e,this._expansionDispatcher=i,this._openCloseAllSubscription=l.a.EMPTY,this.closed=new n.x,this.opened=new n.x,this.destroyed=new n.x,this.expandedChange=new n.x,this.id="cdk-accordion-child-"+h++,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=function(){},this._removeUniqueSelectionListener=i.listen(function(t,e){o.accordion&&!o.accordion.multi&&o.accordion.id===e&&o.id!==t&&(o.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}return Object.defineProperty(t.prototype,"expanded",{get:function(){return this._expanded},set:function(t){if(t=Object(a.c)(t),this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();var e=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,e)}else this.closed.emit();this._changeDetectorRef.markForCheck()}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=Object(a.c)(t)},enumerable:!0,configurable:!0}),t.prototype.ngOnDestroy=function(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()},t.prototype.toggle=function(){this.disabled||(this.expanded=!this.expanded)},t.prototype.close=function(){this.disabled||(this.expanded=!1)},t.prototype.open=function(){this.disabled||(this.expanded=!0)},t.prototype._subscribeToOpenCloseAllActions=function(){var t=this;return this.accordion._openCloseAllActions.subscribe(function(e){t.disabled||(t.expanded=e)})},t.decorators=[{type:n.t,args:[{selector:"cdk-accordion-item, [cdkAccordionItem]",exportAs:"cdkAccordionItem",providers:[{provide:c,useValue:void 0}]}]}],t.ctorParameters=function(){return[{type:c,decorators:[{type:n.Q},{type:n.eb}]},{type:n.k},{type:p.d}]},t.propDecorators={closed:[{type:n.R}],opened:[{type:n.R}],destroyed:[{type:n.R}],expandedChange:[{type:n.R}],expanded:[{type:n.F}],disabled:[{type:n.F}]},t}(),u=function(){function t(){}return t.decorators=[{type:n.K,args:[{exports:[c,g],declarations:[c,g]}]}],t}(),f=i("4c35"),m=i("Ip0R"),y=i("wFw1"),b=i("G5J1"),x=i("p0ib"),_=i("ad02"),w=i("p0Sj"),v=i("VnD/"),S=i("t9fZ"),C=i("lLAP"),O=i("YSh2");i.d(e,"a",function(){return M});var k=new n.D("MAT_ACCORDION"),j={indicatorRotate:Object(o.n)("indicatorRotate",[Object(o.k)("collapsed, void",Object(o.l)({transform:"rotate(0deg)"})),Object(o.k)("expanded",Object(o.l)({transform:"rotate(180deg)"})),Object(o.m)("expanded <=> collapsed, void => collapsed",Object(o.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))]),expansionHeaderHeight:Object(o.n)("expansionHeight",[Object(o.k)("collapsed, void",Object(o.l)({height:"{{collapsedHeight}}"}),{params:{collapsedHeight:"48px"}}),Object(o.k)("expanded",Object(o.l)({height:"{{expandedHeight}}"}),{params:{expandedHeight:"64px"}}),Object(o.m)("expanded <=> collapsed, void => collapsed",Object(o.g)([Object(o.i)("@indicatorRotate",Object(o.f)(),{optional:!0}),Object(o.e)("225ms cubic-bezier(0.4,0.0,0.2,1)")]))]),bodyExpansion:Object(o.n)("bodyExpansion",[Object(o.k)("collapsed, void",Object(o.l)({height:"0px",visibility:"hidden"})),Object(o.k)("expanded",Object(o.l)({height:"*",visibility:"visible"})),Object(o.m)("expanded <=> collapsed, void => collapsed",Object(o.e)("225ms cubic-bezier(0.4,0.0,0.2,1)"))])},T=function(){function t(t){this._template=t}return t.decorators=[{type:n.t,args:[{selector:"ng-template[matExpansionPanelContent]"}]}],t.ctorParameters=function(){return[{type:n.ib}]},t}(),A=0,H=new n.D("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),E=function(t){function e(e,i,o,r,a,l,p){var d=t.call(this,e,i,o)||this;return d._viewContainerRef=r,d._animationMode=l,d._hideToggle=!1,d.afterExpand=new n.x,d.afterCollapse=new n.x,d._inputChanges=new s.a,d._headerId="mat-expansion-panel-header-"+A++,d._bodyAnimationDone=new s.a,d.accordion=e,d._document=a,d._bodyAnimationDone.pipe(Object(_.a)(function(t,e){return t.fromState===e.fromState&&t.toState===e.toState})).subscribe(function(t){"void"!==t.fromState&&("expanded"===t.toState?d.afterExpand.emit():"collapsed"===t.toState&&d.afterCollapse.emit())}),p&&(d.hideToggle=p.hideToggle),d}return Object(r.d)(e,t),Object.defineProperty(e.prototype,"hideToggle",{get:function(){return this._hideToggle||this.accordion&&this.accordion.hideToggle},set:function(t){this._hideToggle=Object(a.c)(t)},enumerable:!0,configurable:!0}),e.prototype._hasSpacing=function(){return!!this.accordion&&"default"===(this.expanded?this.accordion.displayMode:this._getExpandedState())},e.prototype._getExpandedState=function(){return this.expanded?"expanded":"collapsed"},e.prototype.ngAfterContentInit=function(){var t=this;this._lazyContent&&this.opened.pipe(Object(w.a)(null),Object(v.a)(function(){return t.expanded&&!t._portal}),Object(S.a)(1)).subscribe(function(){t._portal=new f.i(t._lazyContent._template,t._viewContainerRef)})},e.prototype.ngOnChanges=function(t){this._inputChanges.next(t)},e.prototype.ngOnDestroy=function(){t.prototype.ngOnDestroy.call(this),this._bodyAnimationDone.complete(),this._inputChanges.complete()},e.prototype._containsFocus=function(){if(this._body&&this._document){var t=this._document.activeElement,e=this._body.nativeElement;return t===e||e.contains(t)}return!1},e.decorators=[{type:n.n,args:[{styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button{margin-left:0;margin-right:8px}"],selector:"mat-expansion-panel",exportAs:"matExpansionPanel",template:'<ng-content select="mat-expansion-panel-header"></ng-content><div class="mat-expansion-panel-content" role="region" [@bodyExpansion]="_getExpandedState()" (@bodyExpansion.done)="_bodyAnimationDone.next($event)" [attr.aria-labelledby]="_headerId" [id]="id" #body><div class="mat-expansion-panel-body"><ng-content></ng-content><ng-template [cdkPortalOutlet]="_portal"></ng-template></div><ng-content select="mat-action-row"></ng-content></div>',encapsulation:n.pb.None,changeDetection:n.j.OnPush,inputs:["disabled","expanded"],outputs:["opened","closed","expandedChange"],animations:[j.bodyExpansion],providers:[{provide:k,useValue:void 0}],host:{class:"mat-expansion-panel","[class.mat-expanded]":"expanded","[class._mat-animation-noopable]":'_animationMode === "NoopAnimations"',"[class.mat-expansion-panel-spacing]":"_hasSpacing()"}}]}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:n.Q},{type:n.eb},{type:n.B,args:[k]}]},{type:n.k},{type:p.d},{type:n.ob},{type:void 0,decorators:[{type:n.B,args:[m.c]}]},{type:String,decorators:[{type:n.Q},{type:n.B,args:[y.a]}]},{type:void 0,decorators:[{type:n.B,args:[H]},{type:n.Q}]}]},e.propDecorators={hideToggle:[{type:n.F}],afterExpand:[{type:n.R}],afterCollapse:[{type:n.R}],_lazyContent:[{type:n.r,args:[T]}],_body:[{type:n.mb,args:["body"]}]},e}(g),R=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"mat-action-row",host:{class:"mat-action-row"}}]}],t}(),P=function(){function t(t,e,i,n,o){var r=this;this.panel=t,this._element=e,this._focusMonitor=i,this._changeDetectorRef=n,this._parentChangeSubscription=l.a.EMPTY;var a=t.accordion?t.accordion._stateChanges.pipe(Object(v.a)(function(t){return!!t.hideToggle})):b.a;this._parentChangeSubscription=Object(x.a)(t.opened,t.closed,a,t._inputChanges.pipe(Object(v.a)(function(t){return!(!t.hideToggle&&!t.disabled)}))).subscribe(function(){return r._changeDetectorRef.markForCheck()}),t.closed.pipe(Object(v.a)(function(){return t._containsFocus()})).subscribe(function(){return i.focusVia(e,"program")}),i.monitor(e).subscribe(function(e){e&&t.accordion&&t.accordion._handleHeaderFocus(r)}),o&&(this.expandedHeight=o.expandedHeight,this.collapsedHeight=o.collapsedHeight)}return Object.defineProperty(t.prototype,"disabled",{get:function(){return this.panel.disabled},enumerable:!0,configurable:!0}),t.prototype._toggle=function(){this.panel.toggle()},t.prototype._isExpanded=function(){return this.panel.expanded},t.prototype._getExpandedState=function(){return this.panel._getExpandedState()},t.prototype._getPanelId=function(){return this.panel.id},t.prototype._showToggle=function(){return!this.panel.hideToggle&&!this.panel.disabled},t.prototype._keydown=function(t){switch(t.keyCode){case O.o:case O.g:Object(O.t)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}},t.prototype.focus=function(t){void 0===t&&(t="program"),this._focusMonitor.focusVia(this._element,t)},t.prototype.ngOnDestroy=function(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)},t.decorators=[{type:n.n,args:[{selector:"mat-expansion-panel-header",styles:[".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],template:'<span class="mat-content"><ng-content select="mat-panel-title"></ng-content><ng-content select="mat-panel-description"></ng-content><ng-content></ng-content></span><span [@indicatorRotate]="_getExpandedState()" *ngIf="_showToggle()" class="mat-expansion-indicator"></span>',encapsulation:n.pb.None,changeDetection:n.j.OnPush,animations:[j.indicatorRotate,j.expansionHeaderHeight],host:{class:"mat-expansion-panel-header",role:"button","[attr.id]":"panel._headerId","[attr.tabindex]":"disabled ? -1 : 0","[attr.aria-controls]":"_getPanelId()","[attr.aria-expanded]":"_isExpanded()","[attr.aria-disabled]":"panel.disabled","[class.mat-expanded]":"_isExpanded()","(click)":"_toggle()","(keydown)":"_keydown($event)","[@expansionHeight]":"{\n        value: _getExpandedState(),\n        params: {\n          collapsedHeight: collapsedHeight,\n          expandedHeight: expandedHeight\n        }\n    }"}}]}],t.ctorParameters=function(){return[{type:E,decorators:[{type:n.y}]},{type:n.u},{type:C.d},{type:n.k},{type:void 0,decorators:[{type:n.B,args:[H]},{type:n.Q}]}]},t.propDecorators={expandedHeight:[{type:n.F}],collapsedHeight:[{type:n.F}]},t}(),D=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"mat-panel-description",host:{class:"mat-expansion-panel-header-description"}}]}],t}(),I=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"mat-panel-title",host:{class:"mat-expansion-panel-header-title"}}]}],t}(),z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._hideToggle=!1,e.displayMode="default",e}return Object(r.d)(e,t),Object.defineProperty(e.prototype,"hideToggle",{get:function(){return this._hideToggle},set:function(t){this._hideToggle=Object(a.c)(t)},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this._keyManager=new C.c(this._headers).withWrap()},e.prototype._handleHeaderKeydown=function(t){var e=t.keyCode,i=this._keyManager;e===O.i?(i.setFirstItemActive(),t.preventDefault()):e===O.f?(i.setLastItemActive(),t.preventDefault()):this._keyManager.onKeydown(t)},e.prototype._handleHeaderFocus=function(t){this._keyManager.updateActiveItem(t)},e.decorators=[{type:n.t,args:[{selector:"mat-accordion",exportAs:"matAccordion",inputs:["multi"],providers:[{provide:k,useExisting:e}],host:{class:"mat-accordion"}}]}],e.propDecorators={_headers:[{type:n.s,args:[P,{descendants:!0}]}],hideToggle:[{type:n.F}],displayMode:[{type:n.F}]},e}(c),M=function(){function t(){}return t.decorators=[{type:n.K,args:[{imports:[m.b,u,f.h],exports:[z,E,R,P,I,D,T],declarations:[z,E,R,P,I,D,T]}]}],t}()},r43C:function(t,e,i){"use strict";i.d(e,"a",function(){return C});var n=i("CcnG"),o=i("Wf4p"),r=i("n6gG"),a=i("mrSG"),s=i("Fzqc"),l=new n.D("MAT_GRID_LIST"),p=function(){function t(t,e){this._element=t,this._gridList=e,this._rowspan=1,this._colspan=1}return Object.defineProperty(t.prototype,"rowspan",{get:function(){return this._rowspan},set:function(t){this._rowspan=Math.round(Object(r.f)(t))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colspan",{get:function(){return this._colspan},set:function(t){this._colspan=Math.round(Object(r.f)(t))},enumerable:!0,configurable:!0}),t.prototype._setStyle=function(t,e){this._element.nativeElement.style[t]=e},t.decorators=[{type:n.n,args:[{selector:"mat-grid-tile",exportAs:"matGridTile",host:{class:"mat-grid-tile"},template:'<figure class="mat-figure"><ng-content></ng-content></figure>',styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],encapsulation:n.pb.None,changeDetection:n.j.OnPush}]}],t.ctorParameters=function(){return[{type:n.u},{type:void 0,decorators:[{type:n.Q},{type:n.B,args:[l]}]}]},t.propDecorators={rowspan:[{type:n.F}],colspan:[{type:n.F}]},t}(),d=function(){function t(t){this._element=t}return t.prototype.ngAfterContentInit=function(){Object(o.z)(this._lines,this._element)},t.decorators=[{type:n.n,args:[{selector:"mat-grid-tile-header, mat-grid-tile-footer",template:'<ng-content select="[mat-grid-avatar], [matGridAvatar]"></ng-content><div class="mat-grid-list-text"><ng-content select="[mat-line], [matLine]"></ng-content></div><ng-content></ng-content>',changeDetection:n.j.OnPush,encapsulation:n.pb.None}]}],t.ctorParameters=function(){return[{type:n.u}]},t.propDecorators={_lines:[{type:n.s,args:[o.h]}]},t}(),c=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"[mat-grid-avatar], [matGridAvatar]",host:{class:"mat-grid-avatar"}}]}],t}(),h=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"mat-grid-tile-header",host:{class:"mat-grid-tile-header"}}]}],t}(),g=function(){function t(){}return t.decorators=[{type:n.t,args:[{selector:"mat-grid-tile-footer",host:{class:"mat-grid-tile-footer"}}]}],t}(),u=function(){function t(){this.columnIndex=0,this.rowIndex=0}return Object.defineProperty(t.prototype,"rowCount",{get:function(){return this.rowIndex+1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowspan",{get:function(){var t=Math.max.apply(Math,this.tracker);return t>1?this.rowCount+t-1:this.rowCount},enumerable:!0,configurable:!0}),t.prototype.update=function(t,e){var i=this;this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(t),this.tracker.fill(0,0,this.tracker.length),this.positions=e.map(function(t){return i._trackTile(t)})},t.prototype._trackTile=function(t){var e=this._findMatchingGap(t.colspan);return this._markTilePosition(e,t),this.columnIndex=e+t.colspan,new f(this.rowIndex,e)},t.prototype._findMatchingGap=function(t){if(t>this.tracker.length)throw Error("mat-grid-list: tile with colspan "+t+' is wider than grid with cols="'+this.tracker.length+'".');var e=-1,i=-1;do{this.columnIndex+t>this.tracker.length?(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e)):-1!=(e=this.tracker.indexOf(0,this.columnIndex))?(i=this._findGapEndIndex(e),this.columnIndex=e+1):(this._nextRow(),e=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(e))}while(i-e<t||0==i);return Math.max(e,0)},t.prototype._nextRow=function(){this.columnIndex=0,this.rowIndex++;for(var t=0;t<this.tracker.length;t++)this.tracker[t]=Math.max(0,this.tracker[t]-1)},t.prototype._findGapEndIndex=function(t){for(var e=t+1;e<this.tracker.length;e++)if(0!=this.tracker[e])return e;return this.tracker.length},t.prototype._markTilePosition=function(t,e){for(var i=0;i<e.colspan;i++)this.tracker[t+i]=e.rowspan},t}(),f=function(){return function(t,e){this.row=t,this.col=e}}(),m=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,y=function(){function t(){this._rows=0,this._rowspan=0}return t.prototype.init=function(t,e,i,n){this._gutterSize=v(t),this._rows=e.rowCount,this._rowspan=e.rowspan,this._cols=i,this._direction=n},t.prototype.getBaseTileSize=function(t,e){return"("+t+"% - ("+this._gutterSize+" * "+e+"))"},t.prototype.getTilePosition=function(t,e){return 0===e?"0":w("("+t+" + "+this._gutterSize+") * "+e)},t.prototype.getTileSize=function(t,e){return"("+t+" * "+e+") + ("+(e-1)+" * "+this._gutterSize+")"},t.prototype.setStyle=function(t,e,i){var n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(t,i,n,o),this.setRowStyles(t,e,n,o)},t.prototype.setColStyles=function(t,e,i,n){var o=this.getBaseTileSize(i,n),r="rtl"===this._direction?"right":"left";t._setStyle(r,this.getTilePosition(o,e)),t._setStyle("width",w(this.getTileSize(o,t.colspan)))},t.prototype.getGutterSpan=function(){return this._gutterSize+" * ("+this._rowspan+" - 1)"},t.prototype.getTileSpan=function(t){return this._rowspan+" * "+this.getTileSize(t,1)},t.prototype.getComputedHeight=function(){return null},t}(),b=function(t){function e(e){var i=t.call(this)||this;return i.fixedRowHeight=e,i}return Object(a.d)(e,t),e.prototype.init=function(e,i,n,o){if(t.prototype.init.call(this,e,i,n,o),this.fixedRowHeight=v(this.fixedRowHeight),!m.test(this.fixedRowHeight))throw Error('Invalid value "'+this.fixedRowHeight+'" set as rowHeight.')},e.prototype.setRowStyles=function(t,e){t._setStyle("top",this.getTilePosition(this.fixedRowHeight,e)),t._setStyle("height",w(this.getTileSize(this.fixedRowHeight,t.rowspan)))},e.prototype.getComputedHeight=function(){return["height",w(this.getTileSpan(this.fixedRowHeight)+" + "+this.getGutterSpan())]},e.prototype.reset=function(t){t._setListStyle(["height",null]),t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})},e}(y),x=function(t){function e(e){var i=t.call(this)||this;return i._parseRatio(e),i}return Object(a.d)(e,t),e.prototype.setRowStyles=function(t,e,i,n){var o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,n),t._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,e)),t._setStyle("paddingTop",w(this.getTileSize(this.baseTileHeight,t.rowspan)))},e.prototype.getComputedHeight=function(){return["paddingBottom",w(this.getTileSpan(this.baseTileHeight)+" + "+this.getGutterSpan())]},e.prototype.reset=function(t){t._setListStyle(["paddingBottom",null]),t._tiles.forEach(function(t){t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})},e.prototype._parseRatio=function(t){var e=t.split(":");if(2!==e.length)throw Error('mat-grid-list: invalid ratio given for row-height: "'+t+'"');this.rowHeightRatio=parseFloat(e[0])/parseFloat(e[1])},e}(y),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(a.d)(e,t),e.prototype.setRowStyles=function(t,e){var i=100/this._rowspan,n=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,n);t._setStyle("top",this.getTilePosition(o,e)),t._setStyle("height",w(this.getTileSize(o,t.rowspan)))},e.prototype.reset=function(t){t._tiles&&t._tiles.forEach(function(t){t._setStyle("top",null),t._setStyle("height",null)})},e}(y);function w(t){return"calc("+t+")"}function v(t){return t.match(/([A-Za-z%]+)$/)?t:t+"px"}var S=function(){function t(t,e){this._element=t,this._dir=e,this._gutter="1px"}return Object.defineProperty(t.prototype,"cols",{get:function(){return this._cols},set:function(t){this._cols=Math.max(1,Math.round(Object(r.f)(t)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gutterSize",{get:function(){return this._gutter},set:function(t){this._gutter=""+(null==t?"":t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rowHeight",{get:function(){return this._rowHeight},set:function(t){var e=""+(null==t?"":t);e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){this._checkCols(),this._checkRowHeight()},t.prototype.ngAfterContentChecked=function(){this._layoutTiles()},t.prototype._checkCols=function(){if(!this.cols)throw Error('mat-grid-list: must pass in number of columns. Example: <mat-grid-list cols="3">')},t.prototype._checkRowHeight=function(){this._rowHeight||this._setTileStyler("1:1")},t.prototype._setTileStyler=function(t){this._tileStyler&&this._tileStyler.reset(this),"fit"===t?this._tileStyler=new _:t&&t.indexOf(":")>-1?this._tileStyler=new x(t):this._tileStyler=new b(t)},t.prototype._layoutTiles=function(){var t=this;this._tileCoordinator||(this._tileCoordinator=new u);var e=this._tileCoordinator,i=this._tiles.filter(function(e){return!e._gridList||e._gridList===t}),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,e,this.cols,n),i.forEach(function(i,n){var o=e.positions[n];t._tileStyler.setStyle(i,o.row,o.col)}),this._setListStyle(this._tileStyler.getComputedHeight())},t.prototype._setListStyle=function(t){t&&(this._element.nativeElement.style[t[0]]=t[1])},t.decorators=[{type:n.n,args:[{selector:"mat-grid-list",exportAs:"matGridList",template:"<div><ng-content></ng-content></div>",styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],host:{class:"mat-grid-list"},providers:[{provide:l,useExisting:t}],changeDetection:n.j.OnPush,encapsulation:n.pb.None}]}],t.ctorParameters=function(){return[{type:n.u},{type:s.b,decorators:[{type:n.Q}]}]},t.propDecorators={_tiles:[{type:n.s,args:[p,{descendants:!0}]}],cols:[{type:n.F}],gutterSize:[{type:n.F}],rowHeight:[{type:n.F}]},t}(),C=function(){function t(){}return t.decorators=[{type:n.K,args:[{imports:[o.i,o.g],exports:[S,p,d,o.i,o.g,h,g,c],declarations:[S,p,d,h,g,c]}]}],t}()}}]);