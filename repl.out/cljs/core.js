replgoog.provide('replcljs.core');
replgoog.require('replgoog.array');
replgoog.require('replgoog.object');
replgoog.require('replgoog.string.StringBuffer');
replgoog.require('replgoog.string');
replcljs.core._STAR_unchecked_if_STAR_ = false;
replcljs.core._STAR_assert_STAR_ = true;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
replcljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
replcljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
replcljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
replcljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
replcljs.core.not = (function not(x){
if(replcljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
replcljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[replgoog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
replcljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
replcljs.core._STAR_main_cli_fn_STAR_ = null;
replcljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",replgoog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
replcljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
replcljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
replcljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
replcljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() {
var G__3259__delegate = function (array,i,idxs){
return replcljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__3259 = function (array,i,var_args){
var idxs = null;
if (replgoog.isDef(var_args)) {
  idxs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3259__delegate.call(this, array, i, idxs);
};
G__3259.cljs$lang$maxFixedArity = 2;
G__3259.cljs$lang$applyTo = (function (arglist__3260){
var array = replcljs.core.first(arglist__3260);
var i = replcljs.core.first(replcljs.core.next(arglist__3260));
var idxs = replcljs.core.rest(replcljs.core.next(arglist__3260));
return G__3259__delegate(array, i, idxs);
});
G__3259.cljs$lang$arity$variadic = G__3259__delegate;
return G__3259;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
replcljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
replcljs.core.alength = (function alength(array){
return array.length;
});
replcljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return replcljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
replcljs.core.IFn = {};
replcljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._invoke[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
replcljs.core.ICounted = {};
replcljs.core._count = (function _count(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._count[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._count["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.IEmptyableCollection = {};
replcljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._empty[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._empty["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.ICollection = {};
replcljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._conj[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._conj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
replcljs.core.IIndexed = {};
replcljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._nth[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._nth[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
replcljs.core.ASeq = {};
replcljs.core.ISeq = {};
replcljs.core._first = (function _first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._first[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
replcljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._rest[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.INext = {};
replcljs.core._next = (function _next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._next[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.ILookup = {};
replcljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._lookup[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._lookup[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
replcljs.core.IAssociative = {};
replcljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._contains_key_QMARK_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
replcljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._assoc[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._assoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
replcljs.core.IMap = {};
replcljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._dissoc[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._dissoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
replcljs.core.IMapEntry = {};
replcljs.core._key = (function _key(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._key[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
replcljs.core._val = (function _val(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._val[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._val["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.ISet = {};
replcljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._disjoin[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._disjoin["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
replcljs.core.IStack = {};
replcljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._peek[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._peek["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
replcljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._pop[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._pop["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.IVector = {};
replcljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._assoc_n[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._assoc_n["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
replcljs.core.IDeref = {};
replcljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._deref[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._deref["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
replcljs.core.IDerefWithTimeout = {};
replcljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._deref_with_timeout[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._deref_with_timeout["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
replcljs.core.IMeta = {};
replcljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._meta[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
replcljs.core.IWithMeta = {};
replcljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._with_meta[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._with_meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
replcljs.core.IReduce = {};
replcljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._reduce[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._reduce[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
replcljs.core.IKVReduce = {};
replcljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._kv_reduce[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._kv_reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
replcljs.core.IEquiv = {};
replcljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._equiv[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._equiv["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
replcljs.core.IHash = {};
replcljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._hash[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._hash["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
replcljs.core.ISeqable = {};
replcljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._seq[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
replcljs.core.ISymbol = {};
replcljs.core.ISequential = {};
replcljs.core.IList = {};
replcljs.core.IRecord = {};
replcljs.core.IReversible = {};
replcljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._rseq[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._rseq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.ISorted = {};
replcljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._sorted_seq[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._sorted_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
replcljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._sorted_seq_from[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._sorted_seq_from["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
replcljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._entry_key[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._entry_key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
replcljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._comparator[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._comparator["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.IPrintable = {};
replcljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._pr_seq[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._pr_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
replcljs.core.IWriter = {};
replcljs.core._write = (function _write(writer,s){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2047__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (replcljs.core._write[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._write["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
replcljs.core._flush = (function _flush(writer){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2047__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (replcljs.core._flush[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._flush["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
replcljs.core.IPrintWithWriter = {};
replcljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (replcljs.core._pr_writer[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._pr_writer["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
replcljs.core.IPending = {};
replcljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto__ = d;
if(and__3941__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2047__auto__ = (((d == null))?null:d);
return (function (){var or__3943__auto__ = (replcljs.core._realized_QMARK_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._realized_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
replcljs.core.IWatchable = {};
replcljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._notify_watches[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._notify_watches["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
replcljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._add_watch[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._add_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
replcljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (replcljs.core._remove_watch[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._remove_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
replcljs.core.IEditableCollection = {};
replcljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._as_transient[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._as_transient["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.ITransientCollection = {};
replcljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._conj_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._conj_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
replcljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._persistent_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._persistent_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
replcljs.core.ITransientAssociative = {};
replcljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._assoc_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._assoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
replcljs.core.ITransientMap = {};
replcljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._dissoc_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
replcljs.core.ITransientVector = {};
replcljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._assoc_n_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
replcljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._pop_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._pop_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
replcljs.core.ITransientSet = {};
replcljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (replcljs.core._disjoin_BANG_[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
replcljs.core.IComparable = {};
replcljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2047__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (replcljs.core._compare[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._compare["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
replcljs.core.IChunk = {};
replcljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._drop_first[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._drop_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.IChunkedSeq = {};
replcljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._chunked_first[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._chunked_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
replcljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._chunked_rest[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._chunked_rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
replcljs.core.IChunkedNext = {};
replcljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (replcljs.core._chunked_next[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._chunked_next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
replcljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3262 = coll;
if(G__3262)
{if((function (){var or__3943__auto__ = (G__3262.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3262.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__3262.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ASeq,G__3262);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ASeq,G__3262);
}
})())
{return coll;
} else
{return replcljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
replcljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3264 = coll;
if(G__3264)
{if((function (){var or__3943__auto__ = (G__3264.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3264.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3264.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3264);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3264);
}
})())
{return replcljs.core._first.call(null,coll);
} else
{var s = replcljs.core.seq.call(null,coll);
if((s == null))
{return null;
} else
{return replcljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
replcljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__3266 = coll;
if(G__3266)
{if((function (){var or__3943__auto__ = (G__3266.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3266.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3266.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3266);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3266);
}
})())
{return replcljs.core._rest.call(null,coll);
} else
{var s = replcljs.core.seq.call(null,coll);
if(!((s == null)))
{return replcljs.core._rest.call(null,s);
} else
{return replcljs.core.List.EMPTY;
}
}
} else
{return replcljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
replcljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3268 = coll;
if(G__3268)
{if((function (){var or__3943__auto__ = (G__3268.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3268.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__3268.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.INext,G__3268);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.INext,G__3268);
}
})())
{return replcljs.core._next.call(null,coll);
} else
{return replcljs.core.seq.call(null,replcljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
replcljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto__ = (x === y);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() {
var G__3269__delegate = function (x,y,more){
while(true){
if(replcljs.core.truth_(_EQ_.call(null,x,y)))
{if(replcljs.core.next.call(null,more))
{{
var G__3270 = y;
var G__3271 = replcljs.core.first.call(null,more);
var G__3272 = replcljs.core.next.call(null,more);
x = G__3270;
y = G__3271;
more = G__3272;
continue;
}
} else
{return _EQ_.call(null,y,replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3269 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3269__delegate.call(this, x, y, more);
};
G__3269.cljs$lang$maxFixedArity = 2;
G__3269.cljs$lang$applyTo = (function (arglist__3273){
var x = replcljs.core.first(arglist__3273);
var y = replcljs.core.first(replcljs.core.next(arglist__3273));
var more = replcljs.core.rest(replcljs.core.next(arglist__3273));
return G__3269__delegate(x, y, more);
});
G__3269.cljs$lang$arity$variadic = G__3269__delegate;
return G__3269;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
replcljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
replcljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(replcljs.core.IHash["null"] = true);
(replcljs.core._hash["null"] = (function (o){
return 0;
}));
(replcljs.core.ILookup["null"] = true);
(replcljs.core._lookup["null"] = (function() {
var G__3274 = null;
var G__3274__2 = (function (o,k){
return null;
});
var G__3274__3 = (function (o,k,not_found){
return not_found;
});
G__3274 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__3274__2.call(this,o,k);
case 3:
return G__3274__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3274;
})()
);
(replcljs.core.IAssociative["null"] = true);
(replcljs.core._assoc["null"] = (function (_,k,v){
return replcljs.core.hash_map.call(null,k,v);
}));
(replcljs.core.INext["null"] = true);
(replcljs.core._next["null"] = (function (_){
return null;
}));
(replcljs.core.IPrintWithWriter["null"] = true);
(replcljs.core._pr_writer["null"] = (function (o,writer,_){
return replcljs.core._write.call(null,writer,"nil");
}));
(replcljs.core.ICollection["null"] = true);
(replcljs.core._conj["null"] = (function (_,o){
return replcljs.core.list.call(null,o);
}));
(replcljs.core.IReduce["null"] = true);
(replcljs.core._reduce["null"] = (function() {
var G__3275 = null;
var G__3275__2 = (function (_,f){
return f.call(null);
});
var G__3275__3 = (function (_,f,start){
return start;
});
G__3275 = function(_,f,start){
switch(arguments.length){
case 2:
return G__3275__2.call(this,_,f);
case 3:
return G__3275__3.call(this,_,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3275;
})()
);
(replcljs.core.IPrintable["null"] = true);
(replcljs.core._pr_seq["null"] = (function (o){
return replcljs.core.list.call(null,"nil");
}));
(replcljs.core.ISet["null"] = true);
(replcljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(replcljs.core.ICounted["null"] = true);
(replcljs.core._count["null"] = (function (_){
return 0;
}));
(replcljs.core.IStack["null"] = true);
(replcljs.core._peek["null"] = (function (_){
return null;
}));
(replcljs.core._pop["null"] = (function (_){
return null;
}));
(replcljs.core.ISeq["null"] = true);
(replcljs.core._first["null"] = (function (_){
return null;
}));
(replcljs.core._rest["null"] = (function (_){
return replcljs.core.list.call(null);
}));
(replcljs.core.IEquiv["null"] = true);
(replcljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(replcljs.core.IWithMeta["null"] = true);
(replcljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(replcljs.core.IMeta["null"] = true);
(replcljs.core._meta["null"] = (function (_){
return null;
}));
(replcljs.core.IIndexed["null"] = true);
(replcljs.core._nth["null"] = (function() {
var G__3276 = null;
var G__3276__2 = (function (_,n){
return null;
});
var G__3276__3 = (function (_,n,not_found){
return not_found;
});
G__3276 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__3276__2.call(this,_,n);
case 3:
return G__3276__3.call(this,_,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3276;
})()
);
(replcljs.core.IEmptyableCollection["null"] = true);
(replcljs.core._empty["null"] = (function (_){
return null;
}));
(replcljs.core.IMap["null"] = true);
(replcljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto__ = replcljs.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto__)
{return (o.toString() === other.toString());
} else
{return and__3941__auto__;
}
});
(replcljs.core.IHash["number"] = true);
(replcljs.core._hash["number"] = (function (o){
return o;
}));
(replcljs.core.IEquiv["number"] = true);
(replcljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(replcljs.core.IHash["boolean"] = true);
(replcljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(replcljs.core.IHash["_"] = true);
(replcljs.core._hash["_"] = (function (o){
return replgoog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
replcljs.core.inc = (function inc(x){
return (x + 1);
});
replgoog.provide('replcljs.core.Reduced');

/**
* @constructor
*/
replcljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
replcljs.core.Reduced.cljs$lang$type = true;
replcljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Reduced");
});
replcljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Reduced");
});
replcljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.val;
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
replcljs.core.reduced = (function reduced(x){
return (new replcljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
replcljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return replcljs.core.instance_QMARK_.call(null,replcljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
replcljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = replcljs.core._count.call(null,cicoll);
if((cnt === 0))
{return f.call(null);
} else
{var val = replcljs.core._nth.call(null,cicoll,0);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,replcljs.core._nth.call(null,cicoll,n));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3277 = nval;
var G__3278 = (n + 1);
val = G__3277;
n = G__3278;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = replcljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,replcljs.core._nth.call(null,cicoll,n));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3279 = nval;
var G__3280 = (n + 1);
val__$1 = G__3279;
n = G__3280;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = replcljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,replcljs.core._nth.call(null,cicoll,n));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3281 = nval;
var G__3282 = (n + 1);
val__$1 = G__3281;
n = G__3282;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
replcljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3283 = nval;
var G__3284 = (n + 1);
val = G__3283;
n = G__3284;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3285 = nval;
var G__3286 = (n + 1);
val__$1 = G__3285;
n = G__3286;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3287 = nval;
var G__3288 = (n + 1);
val__$1 = G__3287;
n = G__3288;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
replcljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__3290 = x;
if(G__3290)
{if((function (){var or__3943__auto__ = (G__3290.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3290.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__3290.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICounted,G__3290);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICounted,G__3290);
}
});
/**
* Returns true if coll implements nth in constant time
*/
replcljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__3292 = x;
if(G__3292)
{if((function (){var or__3943__auto__ = (G__3292.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3292.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3292.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3292);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3292);
}
});
replgoog.provide('replcljs.core.IndexedSeq');

/**
* @constructor
*/
replcljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
replcljs.core.IndexedSeq.cljs$lang$type = true;
replcljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/IndexedSeq");
});
replcljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/IndexedSeq");
});
replcljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.hash_coll.call(null,coll);
});
replcljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new replcljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return null;
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var c = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c > 0))
{return (new replcljs.core.RSeq(coll,(c - 1),null));
} else
{return replcljs.core.List.EMPTY;
}
});
replcljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
if(replcljs.core.counted_QMARK_.call(null,self__.a))
{return replcljs.core.ci_reduce.call(null,self__.a,f,(self__.a[self__.i]),(self__.i + 1));
} else
{return replcljs.core.ci_reduce.call(null,coll,f,(self__.a[self__.i]),0);
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
if(replcljs.core.counted_QMARK_.call(null,self__.a))
{return replcljs.core.ci_reduce.call(null,self__.a,f,start,self__.i);
} else
{return replcljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
replcljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.a.length - self__.i);
});
replcljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
return (self__.a[self__.i]);
});
replcljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new replcljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return replcljs.core.list.call(null);
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return null;
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return not_found;
}
});
replcljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.List.EMPTY;
});
replcljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length))
{return (new replcljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
replcljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return replcljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return replcljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(replcljs.core.IReduce["array"] = true);
(replcljs.core._reduce["array"] = (function() {
var G__3293 = null;
var G__3293__2 = (function (array,f){
return replcljs.core.ci_reduce.call(null,array,f);
});
var G__3293__3 = (function (array,f,start){
return replcljs.core.ci_reduce.call(null,array,f,start);
});
G__3293 = function(array,f,start){
switch(arguments.length){
case 2:
return G__3293__2.call(this,array,f);
case 3:
return G__3293__3.call(this,array,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3293;
})()
);
(replcljs.core.ILookup["array"] = true);
(replcljs.core._lookup["array"] = (function() {
var G__3294 = null;
var G__3294__2 = (function (array,k){
return (array[k]);
});
var G__3294__3 = (function (array,k,not_found){
return replcljs.core._nth.call(null,array,k,not_found);
});
G__3294 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__3294__2.call(this,array,k);
case 3:
return G__3294__3.call(this,array,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3294;
})()
);
(replcljs.core.IIndexed["array"] = true);
(replcljs.core._nth["array"] = (function() {
var G__3295 = null;
var G__3295__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__3295__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__3295 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__3295__2.call(this,array,n);
case 3:
return G__3295__3.call(this,array,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3295;
})()
);
(replcljs.core.ICounted["array"] = true);
(replcljs.core._count["array"] = (function (a){
return a.length;
}));
(replcljs.core.ISeqable["array"] = true);
(replcljs.core._seq["array"] = (function (array){
return replcljs.core.array_seq.call(null,array,0);
}));
replgoog.provide('replcljs.core.RSeq');

/**
* @constructor
*/
replcljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
replcljs.core.RSeq.cljs$lang$type = true;
replcljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/RSeq");
});
replcljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/RSeq");
});
replcljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.hash_coll.call(null,coll);
});
replcljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.i + 1);
});
replcljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._nth.call(null,self__.ci,self__.i);
});
replcljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.i > 0))
{return (new replcljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return replcljs.core.List.EMPTY;
}
});
replcljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
return (new replcljs.core.RSeq(self__.ci,self__.i,new_meta));
});
replcljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
/**
* Same as (first (next x))
*/
replcljs.core.second = (function second(coll){
return replcljs.core.first.call(null,replcljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
replcljs.core.ffirst = (function ffirst(coll){
return replcljs.core.first.call(null,replcljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
replcljs.core.nfirst = (function nfirst(coll){
return replcljs.core.next.call(null,replcljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
replcljs.core.fnext = (function fnext(coll){
return replcljs.core.first.call(null,replcljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
replcljs.core.nnext = (function nnext(coll){
return replcljs.core.next.call(null,replcljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
replcljs.core.last = (function last(s){
while(true){
var sn = replcljs.core.next.call(null,s);
if(!((sn == null)))
{{
var G__3296 = sn;
s = G__3296;
continue;
}
} else
{return replcljs.core.first.call(null,s);
}
break;
}
});
(replcljs.core.IEquiv["_"] = true);
(replcljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
replcljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return replcljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() {
var G__3297__delegate = function (coll,x,xs){
while(true){
if(replcljs.core.truth_(xs))
{{
var G__3298 = conj.call(null,coll,x);
var G__3299 = replcljs.core.first.call(null,xs);
var G__3300 = replcljs.core.next.call(null,xs);
coll = G__3298;
x = G__3299;
xs = G__3300;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3297 = function (coll,x,var_args){
var xs = null;
if (replgoog.isDef(var_args)) {
  xs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3297__delegate.call(this, coll, x, xs);
};
G__3297.cljs$lang$maxFixedArity = 2;
G__3297.cljs$lang$applyTo = (function (arglist__3301){
var coll = replcljs.core.first(arglist__3301);
var x = replcljs.core.first(replcljs.core.next(arglist__3301));
var xs = replcljs.core.rest(replcljs.core.next(arglist__3301));
return G__3297__delegate(coll, x, xs);
});
G__3297.cljs$lang$arity$variadic = G__3297__delegate;
return G__3297;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
replcljs.core.empty = (function empty(coll){
return replcljs.core._empty.call(null,coll);
});
replcljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = replcljs.core.seq.call(null,coll);
var acc = 0;
while(true){
if(replcljs.core.counted_QMARK_.call(null,s))
{return (acc + replcljs.core._count.call(null,s));
} else
{{
var G__3302 = replcljs.core.next.call(null,s);
var G__3303 = (acc + 1);
s = G__3302;
acc = G__3303;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
replcljs.core.count = (function count(coll){
if(replcljs.core.counted_QMARK_.call(null,coll))
{return replcljs.core._count.call(null,coll);
} else
{return replcljs.core.accumulating_seq_count.call(null,coll);
}
});
replcljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(replcljs.core.seq.call(null,coll))
{return replcljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(replcljs.core.indexed_QMARK_.call(null,coll))
{return replcljs.core._nth.call(null,coll,n);
} else
{if(replcljs.core.seq.call(null,coll))
{{
var G__3304 = replcljs.core.next.call(null,coll);
var G__3305 = (n - 1);
coll = G__3304;
n = G__3305;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(replcljs.core.seq.call(null,coll))
{return replcljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(replcljs.core.indexed_QMARK_.call(null,coll))
{return replcljs.core._nth.call(null,coll,n,not_found);
} else
{if(replcljs.core.seq.call(null,coll))
{{
var G__3306 = replcljs.core.next.call(null,coll);
var G__3307 = (n - 1);
var G__3308 = not_found;
coll = G__3306;
n = G__3307;
not_found = G__3308;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
replcljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__3311 = coll;
if(G__3311)
{if((function (){var or__3943__auto__ = (G__3311.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3311.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3311.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3311);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3311);
}
})())
{return replcljs.core._nth.call(null,coll,Math.floor(n));
} else
{return replcljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__3312 = coll;
if(G__3312)
{if((function (){var or__3943__auto__ = (G__3312.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3312.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3312.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3312);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IIndexed,G__3312);
}
})())
{return replcljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return replcljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
replcljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return replcljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return replcljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
replcljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return replcljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() {
var G__3313__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.call(null,coll,k,v);
if(replcljs.core.truth_(kvs))
{{
var G__3314 = ret;
var G__3315 = replcljs.core.first.call(null,kvs);
var G__3316 = replcljs.core.second.call(null,kvs);
var G__3317 = replcljs.core.nnext.call(null,kvs);
coll = G__3314;
k = G__3315;
v = G__3316;
kvs = G__3317;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3313 = function (coll,k,v,var_args){
var kvs = null;
if (replgoog.isDef(var_args)) {
  kvs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3313__delegate.call(this, coll, k, v, kvs);
};
G__3313.cljs$lang$maxFixedArity = 3;
G__3313.cljs$lang$applyTo = (function (arglist__3318){
var coll = replcljs.core.first(arglist__3318);
var k = replcljs.core.first(replcljs.core.next(arglist__3318));
var v = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3318)));
var kvs = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3318)));
return G__3313__delegate(coll, k, v, kvs);
});
G__3313.cljs$lang$arity$variadic = G__3313__delegate;
return G__3313;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
replcljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return replcljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() {
var G__3319__delegate = function (coll,k,ks){
while(true){
var ret = dissoc.call(null,coll,k);
if(replcljs.core.truth_(ks))
{{
var G__3320 = ret;
var G__3321 = replcljs.core.first.call(null,ks);
var G__3322 = replcljs.core.next.call(null,ks);
coll = G__3320;
k = G__3321;
ks = G__3322;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3319 = function (coll,k,var_args){
var ks = null;
if (replgoog.isDef(var_args)) {
  ks = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3319__delegate.call(this, coll, k, ks);
};
G__3319.cljs$lang$maxFixedArity = 2;
G__3319.cljs$lang$applyTo = (function (arglist__3323){
var coll = replcljs.core.first(arglist__3323);
var k = replcljs.core.first(replcljs.core.next(arglist__3323));
var ks = replcljs.core.rest(replcljs.core.next(arglist__3323));
return G__3319__delegate(coll, k, ks);
});
G__3319.cljs$lang$arity$variadic = G__3319__delegate;
return G__3319;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
replcljs.core.with_meta = (function with_meta(o,meta){
return replcljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
replcljs.core.meta = (function meta(o){
if((function (){var G__3325 = o;
if(G__3325)
{if((function (){var or__3943__auto__ = (G__3325.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3325.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3325.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3325);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3325);
}
})())
{return replcljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
replcljs.core.peek = (function peek(coll){
return replcljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
replcljs.core.pop = (function pop(coll){
return replcljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
replcljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return replcljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() {
var G__3326__delegate = function (coll,k,ks){
while(true){
var ret = disj.call(null,coll,k);
if(replcljs.core.truth_(ks))
{{
var G__3327 = ret;
var G__3328 = replcljs.core.first.call(null,ks);
var G__3329 = replcljs.core.next.call(null,ks);
coll = G__3327;
k = G__3328;
ks = G__3329;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3326 = function (coll,k,var_args){
var ks = null;
if (replgoog.isDef(var_args)) {
  ks = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3326__delegate.call(this, coll, k, ks);
};
G__3326.cljs$lang$maxFixedArity = 2;
G__3326.cljs$lang$applyTo = (function (arglist__3330){
var coll = replcljs.core.first(arglist__3330);
var k = replcljs.core.first(replcljs.core.next(arglist__3330));
var ks = replcljs.core.rest(replcljs.core.next(arglist__3330));
return G__3326__delegate(coll, k, ks);
});
G__3326.cljs$lang$arity$variadic = G__3326__delegate;
return G__3326;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
replcljs.core.string_hash_cache = {};
replcljs.core.string_hash_cache_count = 0;
replcljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = replgoog.string.hashCode(k);
(replcljs.core.string_hash_cache[k] = h);
replcljs.core.string_hash_cache_count = (replcljs.core.string_hash_cache_count + 1);
return h;
});
replcljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((replcljs.core.string_hash_cache_count > 255))
{replcljs.core.string_hash_cache = {};
replcljs.core.string_hash_cache_count = 0;
} else
{}
var h = (replcljs.core.string_hash_cache[k]);
if(!((h == null)))
{return h;
} else
{return replcljs.core.add_to_string_hash_cache.call(null,k);
}
});
replcljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto__ = replgoog.isString(o);
if(and__3941__auto__)
{return check_cache;
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.check_string_hash_cache.call(null,o);
} else
{return replcljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
replcljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.not.call(null,replcljs.core.seq.call(null,coll));
}
});
/**
* Returns true if x satisfies ICollection
*/
replcljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3332 = x;
if(G__3332)
{if((function (){var or__3943__auto__ = (G__3332.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3332.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__3332.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICollection,G__3332);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ICollection,G__3332);
}
}
});
/**
* Returns true if x satisfies ISet
*/
replcljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3334 = x;
if(G__3334)
{if((function (){var or__3943__auto__ = (G__3334.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3334.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__3334.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISet,G__3334);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISet,G__3334);
}
}
});
/**
* Returns true if coll implements Associative
*/
replcljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__3336 = x;
if(G__3336)
{if((function (){var or__3943__auto__ = (G__3336.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3336.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__3336.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IAssociative,G__3336);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IAssociative,G__3336);
}
});
/**
* Returns true if coll satisfies ISequential
*/
replcljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__3338 = x;
if(G__3338)
{if((function (){var or__3943__auto__ = (G__3338.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3338.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__3338.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISequential,G__3338);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISequential,G__3338);
}
});
/**
* Returns true if coll satisfies IReduce
*/
replcljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__3340 = x;
if(G__3340)
{if((function (){var or__3943__auto__ = (G__3340.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3340.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3340.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3340);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3340);
}
});
/**
* Return true if x satisfies IMap
*/
replcljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3342 = x;
if(G__3342)
{if((function (){var or__3943__auto__ = (G__3342.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3342.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__3342.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMap,G__3342);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMap,G__3342);
}
}
});
/**
* Return true if x satisfies IVector
*/
replcljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__3344 = x;
if(G__3344)
{if((function (){var or__3943__auto__ = (G__3344.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3344.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__3344.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IVector,G__3344);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IVector,G__3344);
}
});
replcljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__3346 = x;
if(G__3346)
{if((function (){var or__3943__auto__ = (G__3346.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3346.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__3346.cljs$lang$protocol_mask$partition1$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IChunkedSeq,G__3346);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IChunkedSeq,G__3346);
}
});
/**
* @param {...*} var_args
*/
replcljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() {
var G__3347__delegate = function (keyvals){
return replcljs.core.apply.call(null,replgoog.object.create,keyvals);
};
var G__3347 = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3347__delegate.call(this, keyvals);
};
G__3347.cljs$lang$maxFixedArity = 0;
G__3347.cljs$lang$applyTo = (function (arglist__3348){
var keyvals = replcljs.core.seq(arglist__3348);;
return G__3347__delegate(keyvals);
});
G__3347.cljs$lang$arity$variadic = G__3347__delegate;
return G__3347;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(replcljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
replcljs.core.js_keys = (function js_keys(obj){
var keys = [];
replgoog.object.forEach(obj,(function (val,key,obj__$1){
return keys.push(key);
}));
return keys;
});
replcljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
replcljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3349 = (i__$1 + 1);
var G__3350 = (j__$1 + 1);
var G__3351 = (len__$1 - 1);
i__$1 = G__3349;
j__$1 = G__3350;
len__$1 = G__3351;
continue;
}
}
break;
}
});
replcljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - 1));
var j__$1 = (j + (len - 1));
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3352 = (i__$1 - 1);
var G__3353 = (j__$1 - 1);
var G__3354 = (len__$1 - 1);
i__$1 = G__3352;
j__$1 = G__3353;
len__$1 = G__3354;
continue;
}
}
break;
}
});
replcljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
replcljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
replcljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
replcljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
replcljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__3356 = s;
if(G__3356)
{if((function (){var or__3943__auto__ = (G__3356.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3356.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3356.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3356);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3356);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
replcljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__3358 = s;
if(G__3358)
{if((function (){var or__3943__auto__ = (G__3358.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3358.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__3358.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeqable,G__3358);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeqable,G__3358);
}
});
replcljs.core.boolean$ = (function boolean$(x){
if(replcljs.core.truth_(x))
{return true;
} else
{return false;
}
});
replcljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto__ = replgoog.isString(x);
if(and__3941__auto__)
{return !((x.charAt(0) === "\uFDD0"));
} else
{return and__3941__auto__;
}
});
replcljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto__ = replgoog.isString(x);
if(and__3941__auto__)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto__;
}
});
replcljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var G__3360 = x;
if(G__3360)
{if(replcljs.core.truth_((function (){var or__3943__auto__ = null;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__3360.cljs$core$ISymbol$;
}
})()))
{return true;
} else
{if((!G__3360.cljs$lang$protocol_mask$partition$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISymbol,G__3360);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISymbol,G__3360);
}
});
replcljs.core.number_QMARK_ = (function number_QMARK_(n){
return replgoog.isNumber(n);
});
replcljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return replgoog.isFunction(f);
});
replcljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto__ = replcljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3362 = f;
if(G__3362)
{if((function (){var or__3943__auto____$1 = (G__3362.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3362.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__3362.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IFn,G__3362);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IFn,G__3362);
}
}
});
/**
* Returns true if n is an integer.
*/
replcljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto__ = replcljs.core.number_QMARK_.call(null,n);
if(and__3941__auto__)
{var and__3941__auto____$1 = !(isNaN(n));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((n === Infinity));
if(and__3941__auto____$2)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
replcljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((replcljs.core._lookup.call(null,coll,v,replcljs.core.lookup_sentinel) === replcljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
replcljs.core.find = (function find(coll,k){
if((function (){var and__3941__auto__ = !((coll == null));
if(and__3941__auto__)
{var and__3941__auto____$1 = replcljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____$1)
{return replcljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.PersistentVector.fromArray([k,replcljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
replcljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(replcljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() {
var G__3363__delegate = function (x,y,more){
if(!(replcljs.core._EQ_.call(null,x,y)))
{var s = replcljs.core.PersistentHashSet.fromArray([y,x]);
var xs = more;
while(true){
var x__$1 = replcljs.core.first.call(null,xs);
var etc = replcljs.core.next.call(null,xs);
if(replcljs.core.truth_(xs))
{if(replcljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__3364 = replcljs.core.conj.call(null,s,x__$1);
var G__3365 = etc;
s = G__3364;
xs = G__3365;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3363 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3363__delegate.call(this, x, y, more);
};
G__3363.cljs$lang$maxFixedArity = 2;
G__3363.cljs$lang$applyTo = (function (arglist__3366){
var x = replcljs.core.first(arglist__3366);
var y = replcljs.core.first(replcljs.core.next(arglist__3366));
var more = replcljs.core.rest(replcljs.core.next(arglist__3366));
return G__3363__delegate(x, y, more);
});
G__3363.cljs$lang$arity$variadic = G__3363__delegate;
return G__3363;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and replgoog.e.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
replcljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((replcljs.core.type.call(null,x) === replcljs.core.type.call(null,y)))
{if((function (){var G__3368 = x;
if(G__3368)
{if((function (){var or__3943__auto__ = (G__3368.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3368.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__3368.cljs$lang$protocol_mask$partition1$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IComparable,G__3368);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IComparable,G__3368);
}
})())
{return replcljs.core._compare.call(null,x,y);
} else
{return replgoog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
replcljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = replcljs.core.count.call(null,xs);
var yl = replcljs.core.count.call(null,ys);
if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = replcljs.core.compare.call(null,replcljs.core.nth.call(null,xs,n),replcljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto__ = (d === 0);
if(and__3941__auto__)
{return ((n + 1) < len);
} else
{return and__3941__auto__;
}
})())
{{
var G__3369 = xs;
var G__3370 = ys;
var G__3371 = len;
var G__3372 = (n + 1);
xs = G__3369;
ys = G__3370;
len = G__3371;
n = G__3372;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
replcljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(replcljs.core._EQ_.call(null,f,replcljs.core.compare))
{return replcljs.core.compare;
} else
{return (function (x,y){
var r = f.call(null,x,y);
if(replcljs.core.number_QMARK_.call(null,r))
{return r;
} else
{if(replcljs.core.truth_(r))
{return -1;
} else
{if(replcljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
replcljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,replcljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(replcljs.core.seq.call(null,coll))
{var a = replcljs.core.to_array.call(null,coll);
replgoog.array.stableSort(a,replcljs.core.fn__GT_comparator.call(null,comp));
return replcljs.core.seq.call(null,a);
} else
{return replcljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
replcljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,replcljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return replcljs.core.sort.call(null,(function (x,y){
return replcljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
replcljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return replcljs.core.reduce.call(null,f,replcljs.core.first.call(null,s),replcljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = replcljs.core.seq.call(null,coll);
while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,replcljs.core.first.call(null,coll__$1));
if(replcljs.core.reduced_QMARK_.call(null,nval))
{return replcljs.core.deref.call(null,nval);
} else
{{
var G__3373 = nval;
var G__3374 = replcljs.core.next.call(null,coll__$1);
val__$1 = G__3373;
coll__$1 = G__3374;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
replcljs.core.shuffle = (function shuffle(coll){
var a = replcljs.core.to_array.call(null,coll);
replgoog.array.shuffle(a);
return replcljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
replcljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__3377 = coll;
if(G__3377)
{if((function (){var or__3943__auto__ = (G__3377.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3377.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3377.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3377);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3377);
}
})())
{return replcljs.core._reduce.call(null,coll,f);
} else
{return replcljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__3378 = coll;
if(G__3378)
{if((function (){var or__3943__auto__ = (G__3378.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3378.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3378.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3378);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReduce,G__3378);
}
})())
{return replcljs.core._reduce.call(null,coll,f,val);
} else
{return replcljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
replcljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return replcljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
replcljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() {
var G__3379__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3379 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3379__delegate.call(this, x, y, more);
};
G__3379.cljs$lang$maxFixedArity = 2;
G__3379.cljs$lang$applyTo = (function (arglist__3380){
var x = replcljs.core.first(arglist__3380);
var y = replcljs.core.first(replcljs.core.next(arglist__3380));
var more = replcljs.core.rest(replcljs.core.next(arglist__3380));
return G__3379__delegate(x, y, more);
});
G__3379.cljs$lang$arity$variadic = G__3379__delegate;
return G__3379;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
replcljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() {
var G__3381__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,_,(x - y),more);
};
var G__3381 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3381__delegate.call(this, x, y, more);
};
G__3381.cljs$lang$maxFixedArity = 2;
G__3381.cljs$lang$applyTo = (function (arglist__3382){
var x = replcljs.core.first(arglist__3382);
var y = replcljs.core.first(replcljs.core.next(arglist__3382));
var more = replcljs.core.rest(replcljs.core.next(arglist__3382));
return G__3381__delegate(x, y, more);
});
G__3381.cljs$lang$arity$variadic = G__3381__delegate;
return G__3381;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
replcljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() {
var G__3383__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3383 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3383__delegate.call(this, x, y, more);
};
G__3383.cljs$lang$maxFixedArity = 2;
G__3383.cljs$lang$applyTo = (function (arglist__3384){
var x = replcljs.core.first(arglist__3384);
var y = replcljs.core.first(replcljs.core.next(arglist__3384));
var more = replcljs.core.rest(replcljs.core.next(arglist__3384));
return G__3383__delegate(x, y, more);
});
G__3383.cljs$lang$arity$variadic = G__3383__delegate;
return G__3383;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
replcljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() {
var G__3385__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3385 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3385__delegate.call(this, x, y, more);
};
G__3385.cljs$lang$maxFixedArity = 2;
G__3385.cljs$lang$applyTo = (function (arglist__3386){
var x = replcljs.core.first(arglist__3386);
var y = replcljs.core.first(replcljs.core.next(arglist__3386));
var more = replcljs.core.rest(replcljs.core.next(arglist__3386));
return G__3385__delegate(x, y, more);
});
G__3385.cljs$lang$arity$variadic = G__3385__delegate;
return G__3385;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
replcljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() {
var G__3387__delegate = function (x,y,more){
while(true){
if((x < y))
{if(replcljs.core.next.call(null,more))
{{
var G__3388 = y;
var G__3389 = replcljs.core.first.call(null,more);
var G__3390 = replcljs.core.next.call(null,more);
x = G__3388;
y = G__3389;
more = G__3390;
continue;
}
} else
{return (y < replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3387 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3387__delegate.call(this, x, y, more);
};
G__3387.cljs$lang$maxFixedArity = 2;
G__3387.cljs$lang$applyTo = (function (arglist__3391){
var x = replcljs.core.first(arglist__3391);
var y = replcljs.core.first(replcljs.core.next(arglist__3391));
var more = replcljs.core.rest(replcljs.core.next(arglist__3391));
return G__3387__delegate(x, y, more);
});
G__3387.cljs$lang$arity$variadic = G__3387__delegate;
return G__3387;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
replcljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() {
var G__3392__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(replcljs.core.next.call(null,more))
{{
var G__3393 = y;
var G__3394 = replcljs.core.first.call(null,more);
var G__3395 = replcljs.core.next.call(null,more);
x = G__3393;
y = G__3394;
more = G__3395;
continue;
}
} else
{return (y <= replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3392 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3392__delegate.call(this, x, y, more);
};
G__3392.cljs$lang$maxFixedArity = 2;
G__3392.cljs$lang$applyTo = (function (arglist__3396){
var x = replcljs.core.first(arglist__3396);
var y = replcljs.core.first(replcljs.core.next(arglist__3396));
var more = replcljs.core.rest(replcljs.core.next(arglist__3396));
return G__3392__delegate(x, y, more);
});
G__3392.cljs$lang$arity$variadic = G__3392__delegate;
return G__3392;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
replcljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() {
var G__3397__delegate = function (x,y,more){
while(true){
if((x > y))
{if(replcljs.core.next.call(null,more))
{{
var G__3398 = y;
var G__3399 = replcljs.core.first.call(null,more);
var G__3400 = replcljs.core.next.call(null,more);
x = G__3398;
y = G__3399;
more = G__3400;
continue;
}
} else
{return (y > replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3397 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3397__delegate.call(this, x, y, more);
};
G__3397.cljs$lang$maxFixedArity = 2;
G__3397.cljs$lang$applyTo = (function (arglist__3401){
var x = replcljs.core.first(arglist__3401);
var y = replcljs.core.first(replcljs.core.next(arglist__3401));
var more = replcljs.core.rest(replcljs.core.next(arglist__3401));
return G__3397__delegate(x, y, more);
});
G__3397.cljs$lang$arity$variadic = G__3397__delegate;
return G__3397;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
replcljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() {
var G__3402__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(replcljs.core.next.call(null,more))
{{
var G__3403 = y;
var G__3404 = replcljs.core.first.call(null,more);
var G__3405 = replcljs.core.next.call(null,more);
x = G__3403;
y = G__3404;
more = G__3405;
continue;
}
} else
{return (y >= replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3402 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3402__delegate.call(this, x, y, more);
};
G__3402.cljs$lang$maxFixedArity = 2;
G__3402.cljs$lang$applyTo = (function (arglist__3406){
var x = replcljs.core.first(arglist__3406);
var y = replcljs.core.first(replcljs.core.next(arglist__3406));
var more = replcljs.core.rest(replcljs.core.next(arglist__3406));
return G__3402__delegate(x, y, more);
});
G__3402.cljs$lang$arity$variadic = G__3402__delegate;
return G__3402;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
replcljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
replcljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() {
var G__3407__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3407 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3407__delegate.call(this, x, y, more);
};
G__3407.cljs$lang$maxFixedArity = 2;
G__3407.cljs$lang$applyTo = (function (arglist__3408){
var x = replcljs.core.first(arglist__3408);
var y = replcljs.core.first(replcljs.core.next(arglist__3408));
var more = replcljs.core.rest(replcljs.core.next(arglist__3408));
return G__3407__delegate(x, y, more);
});
G__3407.cljs$lang$arity$variadic = G__3407__delegate;
return G__3407;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
replcljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() {
var G__3409__delegate = function (x,y,more){
return replcljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3409 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3409__delegate.call(this, x, y, more);
};
G__3409.cljs$lang$maxFixedArity = 2;
G__3409.cljs$lang$applyTo = (function (arglist__3410){
var x = replcljs.core.first(arglist__3410);
var y = replcljs.core.first(replcljs.core.next(arglist__3410));
var more = replcljs.core.rest(replcljs.core.next(arglist__3410));
return G__3409__delegate(x, y, more);
});
G__3409.cljs$lang$arity$variadic = G__3409__delegate;
return G__3409;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
replcljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
replcljs.core.int$ = (function int$(x){
return replcljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
replcljs.core.long$ = (function long$(x){
return replcljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
replcljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
replcljs.core.quot = (function quot(n,d){
var rem = (n % d);
return replcljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
replcljs.core.rem = (function rem(n,d){
var q = replcljs.core.quot.call(null,n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
replcljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
replcljs.core.rand_int = (function rand_int(n){
return replcljs.core.fix.call(null,replcljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
replcljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
replcljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
replcljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
replcljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
replcljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
replcljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
replcljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
replcljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
replcljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
replcljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
replcljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
replcljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
replcljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> 1) & 1431655765));
var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));
return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
replcljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return replcljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() {
var G__3411__delegate = function (x,y,more){
while(true){
if(replcljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(replcljs.core.next.call(null,more))
{{
var G__3412 = y;
var G__3413 = replcljs.core.first.call(null,more);
var G__3414 = replcljs.core.next.call(null,more);
x = G__3412;
y = G__3413;
more = G__3414;
continue;
}
} else
{return _EQ__EQ_.call(null,y,replcljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3411 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3411__delegate.call(this, x, y, more);
};
G__3411.cljs$lang$maxFixedArity = 2;
G__3411.cljs$lang$applyTo = (function (arglist__3415){
var x = replcljs.core.first(arglist__3415);
var y = replcljs.core.first(replcljs.core.next(arglist__3415));
var more = replcljs.core.rest(replcljs.core.next(arglist__3415));
return G__3411__delegate(x, y, more);
});
G__3411.cljs$lang$arity$variadic = G__3411__delegate;
return G__3411;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
replcljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
replcljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
replcljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
replcljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = replcljs.core.seq.call(null,coll);
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = xs;
if(and__3941__auto__)
{return (n__$1 > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3416 = (n__$1 - 1);
var G__3417 = replcljs.core.next.call(null,xs);
n__$1 = G__3416;
xs = G__3417;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
replcljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() {
var G__3418__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(replcljs.core.truth_(more))
{{
var G__3419 = sb.append(str_STAR_.call(null,replcljs.core.first.call(null,more)));
var G__3420 = replcljs.core.next.call(null,more);
sb = G__3419;
more = G__3420;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new replgoog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3418 = function (x,var_args){
var ys = null;
if (replgoog.isDef(var_args)) {
  ys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__3418__delegate.call(this, x, ys);
};
G__3418.cljs$lang$maxFixedArity = 1;
G__3418.cljs$lang$applyTo = (function (arglist__3421){
var x = replcljs.core.first(arglist__3421);
var ys = replcljs.core.rest(arglist__3421);
return G__3418__delegate(x, ys);
});
G__3418.cljs$lang$arity$variadic = G__3418__delegate;
return G__3418;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, replcljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
replcljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(replcljs.core.keyword_QMARK_.call(null,x))
{return replcljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(replcljs.core.truth_(replcljs.core.regexp_QMARK_.call(null,x)))
{return x.source;
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() {
var G__3422__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(replcljs.core.truth_(more))
{{
var G__3423 = sb.append(str.call(null,replcljs.core.first.call(null,more)));
var G__3424 = replcljs.core.next.call(null,more);
sb = G__3423;
more = G__3424;
continue;
}
} else
{return replcljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new replgoog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3422 = function (x,var_args){
var ys = null;
if (replgoog.isDef(var_args)) {
  ys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__3422__delegate.call(this, x, ys);
};
G__3422.cljs$lang$maxFixedArity = 1;
G__3422.cljs$lang$applyTo = (function (arglist__3425){
var x = replcljs.core.first(arglist__3425);
var ys = replcljs.core.rest(arglist__3425);
return G__3422__delegate(x, ys);
});
G__3422.cljs$lang$arity$variadic = G__3422__delegate;
return G__3422;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, replcljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
replcljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using replgoog.string.format.
* @param {...*} var_args
*/
replcljs.core.format = (function() {
var format__delegate = function (fmt,args){
var args__$1 = replcljs.core.map.call(null,(function (x){
if((function (){var or__3943__auto__ = replcljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [replcljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return replcljs.core.apply.call(null,replgoog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__3426){
var fmt = replcljs.core.first(arglist__3426);
var args = replcljs.core.rest(arglist__3426);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
replcljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(replcljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(replcljs.core.string_QMARK_.call(null,name))
{return (new replcljs.core.Symbol(null,name));
} else
{if("\uFDD0'else")
{throw (new Error("Symbol name must be string or symbol"));
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,[replcljs.core.str(ns),replcljs.core.str("/"),replcljs.core.str(name)].join(''));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
replcljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(replcljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(replcljs.core.symbol_QMARK_.call(null,name))
{return replcljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{if("\uFDD0'else")
{return replcljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,(replcljs.core.truth_(ns)?replcljs.core.str_STAR_.call(null,ns,"/",name):name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
replcljs.core.equiv_sequential = (function equiv_sequential(x,y){
return replcljs.core.boolean$.call(null,((replcljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = replcljs.core.seq.call(null,x);
var ys = replcljs.core.seq.call(null,y);
while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(replcljs.core._EQ_.call(null,replcljs.core.first.call(null,xs),replcljs.core.first.call(null,ys)))
{{
var G__3427 = replcljs.core.next.call(null,xs);
var G__3428 = replcljs.core.next.call(null,ys);
xs = G__3427;
ys = G__3428;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
replcljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
replcljs.core.hash_coll = (function hash_coll(coll){
return replcljs.core.reduce.call(null,(function (p1__3429_SHARP_,p2__3430_SHARP_){
return replcljs.core.hash_combine.call(null,p1__3429_SHARP_,replcljs.core.hash.call(null,p2__3430_SHARP_,false));
}),replcljs.core.hash.call(null,replcljs.core.first.call(null,coll),false),replcljs.core.next.call(null,coll));
});
replcljs.core.hash_imap = (function hash_imap(m){
var h = 0;
var s = replcljs.core.seq.call(null,m);
while(true){
if(s)
{var e = replcljs.core.first.call(null,s);
{
var G__3431 = ((h + (replcljs.core.hash.call(null,replcljs.core.key.call(null,e)) ^ replcljs.core.hash.call(null,replcljs.core.val.call(null,e)))) % 4503599627370496);
var G__3432 = replcljs.core.next.call(null,s);
h = G__3431;
s = G__3432;
continue;
}
} else
{return h;
}
break;
}
});
replcljs.core.hash_iset = (function hash_iset(s){
var h = 0;
var s__$1 = replcljs.core.seq.call(null,s);
while(true){
if(s__$1)
{var e = replcljs.core.first.call(null,s__$1);
{
var G__3433 = ((h + replcljs.core.hash.call(null,e)) % 4503599627370496);
var G__3434 = replcljs.core.next.call(null,s__$1);
h = G__3433;
s__$1 = G__3434;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
replcljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3437_3439 = replcljs.core.seq.call(null,fn_map);
while(true){
if(G__3437_3439)
{var vec__3438_3440 = replcljs.core.first.call(null,G__3437_3439);
var key_name_3441 = replcljs.core.nth.call(null,vec__3438_3440,0,null);
var f_3442 = replcljs.core.nth.call(null,vec__3438_3440,1,null);
var str_name_3443 = replcljs.core.name.call(null,key_name_3441);
(obj[str_name_3443] = f_3442);
{
var G__3444 = replcljs.core.next.call(null,G__3437_3439);
G__3437_3439 = G__3444;
continue;
}
} else
{}
break;
}
return obj;
});
replgoog.provide('replcljs.core.List');

/**
* @constructor
*/
replcljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
replcljs.core.List.cljs$lang$type = true;
replcljs.core.List.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/List");
});
replcljs.core.List.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/List");
});
replcljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
replcljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.List(self__.meta,o,coll,(self__.count + 1),null));
});
replcljs.core.List.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
replcljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
replcljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
replcljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
replcljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return replcljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
replcljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
replcljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.List.EMPTY;
});
replgoog.provide('replcljs.core.EmptyList');

/**
* @constructor
*/
replcljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
replcljs.core.EmptyList.cljs$lang$type = true;
replcljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/EmptyList");
});
replcljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/EmptyList");
});
replcljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return 0;
});
replcljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return null;
});
replcljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.List(self__.meta,o,null,1,null));
});
replcljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return null;
});
replcljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return 0;
});
replcljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return null;
});
replcljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
throw (new Error("Can't pop empty list"));
});
replcljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return null;
});
replcljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.List.EMPTY;
});
replcljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.EmptyList(meta__$1));
});
replcljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.List.EMPTY = (new replcljs.core.EmptyList(null));
replcljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__3446 = coll;
if(G__3446)
{if((function (){var or__3943__auto__ = (G__3446.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3446.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__3446.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReversible,G__3446);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IReversible,G__3446);
}
});
replcljs.core.rseq = (function rseq(coll){
return replcljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
replcljs.core.reverse = (function reverse(coll){
if(replcljs.core.reversible_QMARK_.call(null,coll))
{return replcljs.core.rseq.call(null,coll);
} else
{return replcljs.core.reduce.call(null,replcljs.core.conj,replcljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
replcljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return replcljs.core.List.EMPTY;
});
var list__1 = (function (x){
return replcljs.core.conj.call(null,replcljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return replcljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return replcljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() {
var G__3447__delegate = function (x,y,z,items){
return replcljs.core.conj.call(null,replcljs.core.conj.call(null,replcljs.core.conj.call(null,replcljs.core.reduce.call(null,replcljs.core.conj,replcljs.core.List.EMPTY,replcljs.core.reverse.call(null,items)),z),y),x);
};
var G__3447 = function (x,y,z,var_args){
var items = null;
if (replgoog.isDef(var_args)) {
  items = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3447__delegate.call(this, x, y, z, items);
};
G__3447.cljs$lang$maxFixedArity = 3;
G__3447.cljs$lang$applyTo = (function (arglist__3448){
var x = replcljs.core.first(arglist__3448);
var y = replcljs.core.first(replcljs.core.next(arglist__3448));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3448)));
var items = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3448)));
return G__3447__delegate(x, y, z, items);
});
G__3447.cljs$lang$arity$variadic = G__3447__delegate;
return G__3447;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;
replgoog.provide('replcljs.core.Cons');

/**
* @constructor
*/
replcljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
replcljs.core.Cons.cljs$lang$type = true;
replcljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Cons");
});
replcljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Cons");
});
replcljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return null;
} else
{return replcljs.core._seq.call(null,self__.rest);
}
});
replcljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.Cons(null,o,coll,self__.__hash));
});
replcljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
replcljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return replcljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
replcljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
replcljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
replcljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3450 = coll;
if(G__3450)
{if((function (){var or__3943__auto____$1 = (G__3450.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3450.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3450.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3450);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.ISeq,G__3450);
}
}
})())
{return (new replcljs.core.Cons(null,x,coll,null));
} else
{return (new replcljs.core.Cons(null,x,replcljs.core.seq.call(null,coll),null));
}
});
replcljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__3452 = x;
if(G__3452)
{if((function (){var or__3943__auto__ = (G__3452.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3452.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__3452.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IList,G__3452);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IList,G__3452);
}
});
(replcljs.core.IReduce["string"] = true);
(replcljs.core._reduce["string"] = (function() {
var G__3453 = null;
var G__3453__2 = (function (string,f){
return replcljs.core.ci_reduce.call(null,string,f);
});
var G__3453__3 = (function (string,f,start){
return replcljs.core.ci_reduce.call(null,string,f,start);
});
G__3453 = function(string,f,start){
switch(arguments.length){
case 2:
return G__3453__2.call(this,string,f);
case 3:
return G__3453__3.call(this,string,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3453;
})()
);
(replcljs.core.ILookup["string"] = true);
(replcljs.core._lookup["string"] = (function() {
var G__3454 = null;
var G__3454__2 = (function (string,k){
return replcljs.core._nth.call(null,string,k);
});
var G__3454__3 = (function (string,k,not_found){
return replcljs.core._nth.call(null,string,k,not_found);
});
G__3454 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__3454__2.call(this,string,k);
case 3:
return G__3454__3.call(this,string,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3454;
})()
);
(replcljs.core.IIndexed["string"] = true);
(replcljs.core._nth["string"] = (function() {
var G__3455 = null;
var G__3455__2 = (function (string,n){
if((n < replcljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__3455__3 = (function (string,n,not_found){
if((n < replcljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3455 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__3455__2.call(this,string,n);
case 3:
return G__3455__3.call(this,string,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3455;
})()
);
(replcljs.core.ICounted["string"] = true);
(replcljs.core._count["string"] = (function (s){
return s.length;
}));
(replcljs.core.ISeqable["string"] = true);
(replcljs.core._seq["string"] = (function (string){
return replcljs.core.prim_seq.call(null,string,0);
}));
(replcljs.core.IHash["string"] = true);
(replcljs.core._hash["string"] = (function (o){
return replgoog.string.hashCode(o);
}));
replgoog.provide('replcljs.core.Symbol');

/**
* @constructor
*/
replcljs.core.Symbol = (function (meta,sym){
this.meta = meta;
this.sym = sym;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6684929;
})
replcljs.core.Symbol.cljs$lang$type = true;
replcljs.core.Symbol.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Symbol");
});
replcljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Symbol");
});
replcljs.core.Symbol.prototype.call = (function() {
var G__3460 = null;
var G__3460__2 = (function (this_sym3458,coll){
var self__ = this;
var this_sym3458__$1 = this;
var sym__$1 = this_sym3458__$1;
if((coll == null))
{return null;
} else
{return replcljs.core._lookup.call(null,coll,sym__$1,null);
}
});
var G__3460__3 = (function (this_sym3459,coll,not_found){
var self__ = this;
var this_sym3459__$1 = this;
var _ = this_sym3459__$1;
if((coll == null))
{return not_found;
} else
{return replcljs.core._lookup.call(null,coll,self__.sym,not_found);
}
});
G__3460 = function(this_sym3459,coll,not_found){
switch(arguments.length){
case 2:
return G__3460__2.call(this,this_sym3459,coll);
case 3:
return G__3460__3.call(this,this_sym3459,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3460;
})()
;
replcljs.core.Symbol.prototype.apply = (function (this_sym3456,args3457){
var self__ = this;
return this_sym3456.call.apply(this_sym3456,[this_sym3456].concat(args3457.slice()));
});
replcljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (sym__$1,new_meta){
var self__ = this;
return (new replcljs.core.Symbol(new_meta,[replcljs.core.str(sym__$1)].join('')));
});
replcljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (sym__$1){
var self__ = this;
return self__.meta;
});
replcljs.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (sym__$1,k){
var self__ = this;
return null;
});
replcljs.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (sym__$1,k,not_found){
var self__ = this;
return not_found;
});
replcljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var or__3943__auto__ = (o === other);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = replcljs.core.symbol_QMARK_.call(null,other);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,replgoog.string.hashCode(replcljs.core.str_STAR_.call(null,"\uFDD1","'",o)),replcljs.core.hash.call(null,other));
} else
{return and__3941__auto__;
}
}
});
replcljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (o){
var self__ = this;
return replgoog.string.hashCode(replcljs.core.str_STAR_.call(null,"\uFDD1","'",o));
});
replcljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.sym;
});
replcljs.core.Symbol.prototype.cljs$core$ISymbol$ = true;
replgoog.provide('replcljs.core.Keyword');

/**
* @constructor
*/
replcljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
replcljs.core.Keyword.cljs$lang$type = true;
replcljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Keyword");
});
replcljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Keyword");
});
replcljs.core.Keyword.prototype.call = (function() {
var G__3465 = null;
var G__3465__2 = (function (this_sym3463,coll){
var self__ = this;
var this_sym3463__$1 = this;
var _ = this_sym3463__$1;
if((coll == null))
{return null;
} else
{var strobj = coll.strobj;
if((strobj == null))
{return replcljs.core._lookup.call(null,coll,self__.k,null);
} else
{return (strobj[self__.k]);
}
}
});
var G__3465__3 = (function (this_sym3464,coll,not_found){
var self__ = this;
var this_sym3464__$1 = this;
var _ = this_sym3464__$1;
if((coll == null))
{return not_found;
} else
{return replcljs.core._lookup.call(null,coll,self__.k,not_found);
}
});
G__3465 = function(this_sym3464,coll,not_found){
switch(arguments.length){
case 2:
return G__3465__2.call(this,this_sym3464,coll);
case 3:
return G__3465__3.call(this,this_sym3464,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3465;
})()
;
replcljs.core.Keyword.prototype.apply = (function (this_sym3461,args3462){
var self__ = this;
return this_sym3461.call.apply(this_sym3461,[this_sym3461].concat(args3462.slice()));
});
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3470 = null;
var G__3470__2 = (function (this_sym3468,coll){
var this_sym3468__$1 = this;
var this$ = this_sym3468__$1;
return replcljs.core._lookup.call(null,coll,this$.toString(),null);
});
var G__3470__3 = (function (this_sym3469,coll,not_found){
var this_sym3469__$1 = this;
var this$ = this_sym3469__$1;
return replcljs.core._lookup.call(null,coll,this$.toString(),not_found);
});
G__3470 = function(this_sym3469,coll,not_found){
switch(arguments.length){
case 2:
return G__3470__2.call(this,this_sym3469,coll);
case 3:
return G__3470__3.call(this,this_sym3469,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3470;
})()
;
String.prototype.apply = (function (this_sym3466,args3467){
return this_sym3466.call.apply(this_sym3466,[this_sym3466].concat(args3467.slice()));
});
String.prototype.apply = (function (s,args){
if((replcljs.core.count.call(null,args) < 2))
{return replcljs.core._lookup.call(null,(args[0]),s,null);
} else
{return replcljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
replcljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x = lazy_seq.x;
if(lazy_seq.realized)
{return x;
} else
{lazy_seq.x = x.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});
replgoog.provide('replcljs.core.LazySeq');

/**
* @constructor
*/
replcljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
replcljs.core.LazySeq.cljs$lang$type = true;
replcljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/LazySeq");
});
replcljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/LazySeq");
});
replcljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
replcljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.seq.call(null,replcljs.core.lazy_seq_value.call(null,coll));
});
replcljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.first.call(null,replcljs.core.lazy_seq_value.call(null,coll));
});
replcljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.rest.call(null,replcljs.core.lazy_seq_value.call(null,coll));
});
replcljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.LazySeq(meta__$1,self__.realized,self__.x,self__.__hash));
});
replcljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replgoog.provide('replcljs.core.ChunkBuffer');

/**
* @constructor
*/
replcljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
replcljs.core.ChunkBuffer.cljs$lang$type = true;
replcljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ChunkBuffer");
});
replcljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ChunkBuffer");
});
replcljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return self__.end;
});
replcljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
replcljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new replcljs.core.ArrayChunk(self__.buf,0,self__.end));
self__.buf = null;
return ret;
});
replcljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new replcljs.core.ChunkBuffer(replcljs.core.make_array.call(null,capacity),0));
});
replgoog.provide('replcljs.core.ArrayChunk');

/**
* @constructor
*/
replcljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
replcljs.core.ArrayChunk.cljs$lang$type = true;
replcljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ArrayChunk");
});
replcljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ArrayChunk");
});
replcljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return replcljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
replcljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
return replcljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
replcljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
replcljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new replcljs.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
replcljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
return (self__.arr[(self__.off + i)]);
});
replcljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (i >= 0);
if(and__3941__auto__)
{return (i < (self__.end - self__.off));
} else
{return and__3941__auto__;
}
})())
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
replcljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.end - self__.off);
});
replcljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new replcljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;
replgoog.provide('replcljs.core.ChunkedCons');

/**
* @constructor
*/
replcljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
replcljs.core.ChunkedCons.cljs$lang$type = true;
replcljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ChunkedCons");
});
replcljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ChunkedCons");
});
replcljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
return replcljs.core.cons.call(null,o,this$);
});
replcljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._nth.call(null,self__.chunk,0);
});
replcljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((replcljs.core._count.call(null,self__.chunk) > 1))
{return (new replcljs.core.ChunkedCons(replcljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return replcljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
replcljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
replcljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (new replcljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
replcljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replcljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return self__.chunk;
});
replcljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return replcljs.core.List.EMPTY;
} else
{return self__.more;
}
});
replcljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((replcljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new replcljs.core.ChunkedCons(chunk,rest,null,null));
}
});
replcljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
replcljs.core.chunk = (function chunk(b){
return b.chunk();
});
replcljs.core.chunk_first = (function chunk_first(s){
return replcljs.core._chunked_first.call(null,s);
});
replcljs.core.chunk_rest = (function chunk_rest(s){
return replcljs.core._chunked_rest.call(null,s);
});
replcljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__3472 = s;
if(G__3472)
{if((function (){var or__3943__auto__ = (G__3472.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3472.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__3472.cljs$lang$protocol_mask$partition1$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IChunkedNext,G__3472);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IChunkedNext,G__3472);
}
})())
{return replcljs.core._chunked_next.call(null,s);
} else
{return replcljs.core.seq.call(null,replcljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
replcljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(replcljs.core.seq.call(null,s__$1))
{ary.push(replcljs.core.first.call(null,s__$1));
{
var G__3473 = replcljs.core.next.call(null,s__$1);
s__$1 = G__3473;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
replcljs.core.to_array_2d = (function to_array_2d(coll){
var ret = replcljs.core.make_array.call(null,replcljs.core.count.call(null,coll));
var i_3474 = 0;
var xs_3475 = replcljs.core.seq.call(null,coll);
while(true){
if(xs_3475)
{(ret[i_3474] = replcljs.core.to_array.call(null,replcljs.core.first.call(null,xs_3475)));
{
var G__3476 = (i_3474 + 1);
var G__3477 = replcljs.core.next.call(null,xs_3475);
i_3474 = G__3476;
xs_3475 = G__3477;
continue;
}
} else
{}
break;
}
return ret;
});
replcljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(replcljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(replcljs.core.seq_QMARK_.call(null,size_or_seq))
{return replcljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = replcljs.core.make_array.call(null,size);
if(replcljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = replcljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = replcljs.core.first.call(null,s__$1));
{
var G__3478 = (i + 1);
var G__3479 = replcljs.core.next.call(null,s__$1);
i = G__3478;
s__$1 = G__3479;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3480 = size;
var i_3481 = 0;
while(true){
if((i_3481 < n__2209__auto___3480))
{(a[i_3481] = init_val_or_seq);
{
var G__3482 = (i_3481 + 1);
i_3481 = G__3482;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
replcljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(replcljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(replcljs.core.seq_QMARK_.call(null,size_or_seq))
{return replcljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = replcljs.core.make_array.call(null,size);
if(replcljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = replcljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = replcljs.core.first.call(null,s__$1));
{
var G__3483 = (i + 1);
var G__3484 = replcljs.core.next.call(null,s__$1);
i = G__3483;
s__$1 = G__3484;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3485 = size;
var i_3486 = 0;
while(true){
if((i_3486 < n__2209__auto___3485))
{(a[i_3486] = init_val_or_seq);
{
var G__3487 = (i_3486 + 1);
i_3486 = G__3487;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
replcljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(replcljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(replcljs.core.seq_QMARK_.call(null,size_or_seq))
{return replcljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = replcljs.core.make_array.call(null,size);
if(replcljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = replcljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = replcljs.core.first.call(null,s__$1));
{
var G__3488 = (i + 1);
var G__3489 = replcljs.core.next.call(null,s__$1);
i = G__3488;
s__$1 = G__3489;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3490 = size;
var i_3491 = 0;
while(true){
if((i_3491 < n__2209__auto___3490))
{(a[i_3491] = init_val_or_seq);
{
var G__3492 = (i_3491 + 1);
i_3491 = G__3492;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
replcljs.core.bounded_count = (function bounded_count(s,n){
if(replcljs.core.counted_QMARK_.call(null,s))
{return replcljs.core.count.call(null,s);
} else
{var s__$1 = s;
var i = n;
var sum = 0;
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = (i > 0);
if(and__3941__auto__)
{return replcljs.core.seq.call(null,s__$1);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3493 = replcljs.core.next.call(null,s__$1);
var G__3494 = (i - 1);
var G__3495 = (sum + 1);
s__$1 = G__3493;
i = G__3494;
sum = G__3495;
continue;
}
} else
{return sum;
}
break;
}
}
});
replcljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((replcljs.core.next.call(null,arglist) == null))
{return replcljs.core.seq.call(null,replcljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return replcljs.core.cons.call(null,replcljs.core.first.call(null,arglist),spread.call(null,replcljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
replcljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new replcljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new replcljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new replcljs.core.LazySeq(null,false,(function (){
var s = replcljs.core.seq.call(null,x);
if(s)
{if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{return replcljs.core.chunk_cons.call(null,replcljs.core.chunk_first.call(null,s),concat.call(null,replcljs.core.chunk_rest.call(null,s),y));
} else
{return replcljs.core.cons.call(null,replcljs.core.first.call(null,s),concat.call(null,replcljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() {
var G__3496__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new replcljs.core.LazySeq(null,false,(function (){
var xys__$1 = replcljs.core.seq.call(null,xys);
if(xys__$1)
{if(replcljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return replcljs.core.chunk_cons.call(null,replcljs.core.chunk_first.call(null,xys__$1),cat.call(null,replcljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return replcljs.core.cons.call(null,replcljs.core.first.call(null,xys__$1),cat.call(null,replcljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(replcljs.core.truth_(zs__$1))
{return cat.call(null,replcljs.core.first.call(null,zs__$1),replcljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,concat.call(null,x,y),zs);
};
var G__3496 = function (x,y,var_args){
var zs = null;
if (replgoog.isDef(var_args)) {
  zs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3496__delegate.call(this, x, y, zs);
};
G__3496.cljs$lang$maxFixedArity = 2;
G__3496.cljs$lang$applyTo = (function (arglist__3497){
var x = replcljs.core.first(arglist__3497);
var y = replcljs.core.first(replcljs.core.next(arglist__3497));
var zs = replcljs.core.rest(replcljs.core.next(arglist__3497));
return G__3496__delegate(x, y, zs);
});
G__3496.cljs$lang$arity$variadic = G__3496__delegate;
return G__3496;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
replcljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return replcljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return replcljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return replcljs.core.cons.call(null,a,replcljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return replcljs.core.cons.call(null,a,replcljs.core.cons.call(null,b,replcljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() {
var G__3498__delegate = function (a,b,c,d,more){
return replcljs.core.cons.call(null,a,replcljs.core.cons.call(null,b,replcljs.core.cons.call(null,c,replcljs.core.cons.call(null,d,replcljs.core.spread.call(null,more)))));
};
var G__3498 = function (a,b,c,d,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__3498__delegate.call(this, a, b, c, d, more);
};
G__3498.cljs$lang$maxFixedArity = 4;
G__3498.cljs$lang$applyTo = (function (arglist__3499){
var a = replcljs.core.first(arglist__3499);
var b = replcljs.core.first(replcljs.core.next(arglist__3499));
var c = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3499)));
var d = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3499))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3499))));
return G__3498__delegate(a, b, c, d, more);
});
G__3498.cljs$lang$arity$variadic = G__3498__delegate;
return G__3498;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
replcljs.core.transient$ = (function transient$(coll){
return replcljs.core._as_transient.call(null,coll);
});
replcljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return replcljs.core._persistent_BANG_.call(null,tcoll);
});
replcljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return replcljs.core._conj_BANG_.call(null,tcoll,val);
});
replcljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return replcljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
replcljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return replcljs.core._dissoc_BANG_.call(null,tcoll,key);
});
replcljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return replcljs.core._pop_BANG_.call(null,tcoll);
});
replcljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return replcljs.core._disjoin_BANG_.call(null,tcoll,val);
});
replcljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = replcljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a = replcljs.core._first.call(null,args__$1);
var args__$2 = replcljs.core._rest.call(null,args__$1);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a);
} else
{return f.call(null,a);
}
} else
{var b = replcljs.core._first.call(null,args__$2);
var args__$3 = replcljs.core._rest.call(null,args__$2);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a,b);
} else
{return f.call(null,a,b);
}
} else
{var c = replcljs.core._first.call(null,args__$3);
var args__$4 = replcljs.core._rest.call(null,args__$3);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a,b,c);
} else
{return f.call(null,a,b,c);
}
} else
{var d = replcljs.core._first.call(null,args__$4);
var args__$5 = replcljs.core._rest.call(null,args__$4);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a,b,c,d);
} else
{return f.call(null,a,b,c,d);
}
} else
{var e = replcljs.core._first.call(null,args__$5);
var args__$6 = replcljs.core._rest.call(null,args__$5);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a,b,c,d,e);
} else
{return f.call(null,a,b,c,d,e);
}
} else
{var f__$1 = replcljs.core._first.call(null,args__$6);
var args__$7 = replcljs.core._rest.call(null,args__$6);
if((argc === 6))
{if(f__$1.cljs$lang$arity$6)
{return f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1);
}
} else
{var g = replcljs.core._first.call(null,args__$7);
var args__$8 = replcljs.core._rest.call(null,args__$7);
if((argc === 7))
{if(f__$1.cljs$lang$arity$7)
{return f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g);
}
} else
{var h = replcljs.core._first.call(null,args__$8);
var args__$9 = replcljs.core._rest.call(null,args__$8);
if((argc === 8))
{if(f__$1.cljs$lang$arity$8)
{return f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h);
}
} else
{var i = replcljs.core._first.call(null,args__$9);
var args__$10 = replcljs.core._rest.call(null,args__$9);
if((argc === 9))
{if(f__$1.cljs$lang$arity$9)
{return f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);
}
} else
{var j = replcljs.core._first.call(null,args__$10);
var args__$11 = replcljs.core._rest.call(null,args__$10);
if((argc === 10))
{if(f__$1.cljs$lang$arity$10)
{return f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}
} else
{var k = replcljs.core._first.call(null,args__$11);
var args__$12 = replcljs.core._rest.call(null,args__$11);
if((argc === 11))
{if(f__$1.cljs$lang$arity$11)
{return f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}
} else
{var l = replcljs.core._first.call(null,args__$12);
var args__$13 = replcljs.core._rest.call(null,args__$12);
if((argc === 12))
{if(f__$1.cljs$lang$arity$12)
{return f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}
} else
{var m = replcljs.core._first.call(null,args__$13);
var args__$14 = replcljs.core._rest.call(null,args__$13);
if((argc === 13))
{if(f__$1.cljs$lang$arity$13)
{return f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}
} else
{var n = replcljs.core._first.call(null,args__$14);
var args__$15 = replcljs.core._rest.call(null,args__$14);
if((argc === 14))
{if(f__$1.cljs$lang$arity$14)
{return f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}
} else
{var o = replcljs.core._first.call(null,args__$15);
var args__$16 = replcljs.core._rest.call(null,args__$15);
if((argc === 15))
{if(f__$1.cljs$lang$arity$15)
{return f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}
} else
{var p = replcljs.core._first.call(null,args__$16);
var args__$17 = replcljs.core._rest.call(null,args__$16);
if((argc === 16))
{if(f__$1.cljs$lang$arity$16)
{return f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}
} else
{var q = replcljs.core._first.call(null,args__$17);
var args__$18 = replcljs.core._rest.call(null,args__$17);
if((argc === 17))
{if(f__$1.cljs$lang$arity$17)
{return f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}
} else
{var r = replcljs.core._first.call(null,args__$18);
var args__$19 = replcljs.core._rest.call(null,args__$18);
if((argc === 18))
{if(f__$1.cljs$lang$arity$18)
{return f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}
} else
{var s = replcljs.core._first.call(null,args__$19);
var args__$20 = replcljs.core._rest.call(null,args__$19);
if((argc === 19))
{if(f__$1.cljs$lang$arity$19)
{return f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
} else
{var t = replcljs.core._first.call(null,args__$20);
var args__$21 = replcljs.core._rest.call(null,args__$20);
if((argc === 20))
{if(f__$1.cljs$lang$arity$20)
{return f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
replcljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = replcljs.core.bounded_count.call(null,args,(fixed_arity + 1));
if((bc <= fixed_arity))
{return replcljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,replcljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist = replcljs.core.list_STAR_.call(null,x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = replcljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return replcljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,replcljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = replcljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = replcljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return replcljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,replcljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = replcljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = replcljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return replcljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,replcljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() {
var G__3500__delegate = function (f,a,b,c,d,args){
var arglist = replcljs.core.cons.call(null,a,replcljs.core.cons.call(null,b,replcljs.core.cons.call(null,c,replcljs.core.cons.call(null,d,replcljs.core.spread.call(null,args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = replcljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return replcljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,replcljs.core.to_array.call(null,arglist));
}
};
var G__3500 = function (f,a,b,c,d,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
}
return G__3500__delegate.call(this, f, a, b, c, d, args);
};
G__3500.cljs$lang$maxFixedArity = 5;
G__3500.cljs$lang$applyTo = (function (arglist__3501){
var f = replcljs.core.first(arglist__3501);
var a = replcljs.core.first(replcljs.core.next(arglist__3501));
var b = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3501)));
var c = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3501))));
var d = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3501)))));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3501)))));
return G__3500__delegate(f, a, b, c, d, args);
});
G__3500.cljs$lang$arity$variadic = G__3500__delegate;
return G__3500;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, replcljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
replcljs.core.vary_meta = (function() {
var vary_meta__delegate = function (obj,f,args){
return replcljs.core.with_meta.call(null,obj,replcljs.core.apply.call(null,f,replcljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3502){
var obj = replcljs.core.first(arglist__3502);
var f = replcljs.core.first(replcljs.core.next(arglist__3502));
var args = replcljs.core.rest(replcljs.core.next(arglist__3502));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
replcljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(replcljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() {
var G__3503__delegate = function (x,y,more){
return replcljs.core.not.call(null,replcljs.core.apply.call(null,replcljs.core._EQ_,x,y,more));
};
var G__3503 = function (x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3503__delegate.call(this, x, y, more);
};
G__3503.cljs$lang$maxFixedArity = 2;
G__3503.cljs$lang$applyTo = (function (arglist__3504){
var x = replcljs.core.first(arglist__3504);
var y = replcljs.core.first(replcljs.core.next(arglist__3504));
var more = replcljs.core.rest(replcljs.core.next(arglist__3504));
return G__3503__delegate(x, y, more);
});
G__3503.cljs$lang$arity$variadic = G__3503__delegate;
return G__3503;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
replcljs.core.not_empty = (function not_empty(coll){
if(replcljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
replcljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((replcljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(replcljs.core.truth_(pred.call(null,replcljs.core.first.call(null,coll))))
{{
var G__3505 = pred;
var G__3506 = replcljs.core.next.call(null,coll);
pred = G__3505;
coll = G__3506;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
replcljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(replcljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
replcljs.core.some = (function some(pred,coll){
while(true){
if(replcljs.core.seq.call(null,coll))
{var or__3943__auto__ = pred.call(null,replcljs.core.first.call(null,coll));
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{{
var G__3507 = pred;
var G__3508 = replcljs.core.next.call(null,coll);
pred = G__3507;
coll = G__3508;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
replcljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return replcljs.core.not.call(null,replcljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
replcljs.core.even_QMARK_ = (function even_QMARK_(n){
if(replcljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([replcljs.core.str("Argument must be an integer: "),replcljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
replcljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(replcljs.core.even_QMARK_.call(null,n));
});
replcljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
replcljs.core.complement = (function complement(f){
return (function() {
var G__3509 = null;
var G__3509__0 = (function (){
return replcljs.core.not.call(null,f.call(null));
});
var G__3509__1 = (function (x){
return replcljs.core.not.call(null,f.call(null,x));
});
var G__3509__2 = (function (x,y){
return replcljs.core.not.call(null,f.call(null,x,y));
});
var G__3509__3 = (function() {
var G__3510__delegate = function (x,y,zs){
return replcljs.core.not.call(null,replcljs.core.apply.call(null,f,x,y,zs));
};
var G__3510 = function (x,y,var_args){
var zs = null;
if (replgoog.isDef(var_args)) {
  zs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3510__delegate.call(this, x, y, zs);
};
G__3510.cljs$lang$maxFixedArity = 2;
G__3510.cljs$lang$applyTo = (function (arglist__3511){
var x = replcljs.core.first(arglist__3511);
var y = replcljs.core.first(replcljs.core.next(arglist__3511));
var zs = replcljs.core.rest(replcljs.core.next(arglist__3511));
return G__3510__delegate(x, y, zs);
});
G__3510.cljs$lang$arity$variadic = G__3510__delegate;
return G__3510;
})()
;
G__3509 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__3509__0.call(this);
case 1:
return G__3509__1.call(this,x);
case 2:
return G__3509__2.call(this,x,y);
default:
return G__3509__3.cljs$lang$arity$variadic(x,y, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3509.cljs$lang$maxFixedArity = 2;
G__3509.cljs$lang$applyTo = G__3509__3.cljs$lang$applyTo;
return G__3509;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
replcljs.core.constantly = (function constantly(x){
return (function() {
var G__3512__delegate = function (args){
return x;
};
var G__3512 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3512__delegate.call(this, args);
};
G__3512.cljs$lang$maxFixedArity = 0;
G__3512.cljs$lang$applyTo = (function (arglist__3513){
var args = replcljs.core.seq(arglist__3513);;
return G__3512__delegate(args);
});
G__3512.cljs$lang$arity$variadic = G__3512__delegate;
return G__3512;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
replcljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return replcljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__3514 = null;
var G__3514__0 = (function (){
return f.call(null,g.call(null));
});
var G__3514__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3514__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3514__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3514__4 = (function() {
var G__3515__delegate = function (x,y,z,args){
return f.call(null,replcljs.core.apply.call(null,g,x,y,z,args));
};
var G__3515 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3515__delegate.call(this, x, y, z, args);
};
G__3515.cljs$lang$maxFixedArity = 3;
G__3515.cljs$lang$applyTo = (function (arglist__3516){
var x = replcljs.core.first(arglist__3516);
var y = replcljs.core.first(replcljs.core.next(arglist__3516));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3516)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3516)));
return G__3515__delegate(x, y, z, args);
});
G__3515.cljs$lang$arity$variadic = G__3515__delegate;
return G__3515;
})()
;
G__3514 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3514__0.call(this);
case 1:
return G__3514__1.call(this,x);
case 2:
return G__3514__2.call(this,x,y);
case 3:
return G__3514__3.call(this,x,y,z);
default:
return G__3514__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3514.cljs$lang$maxFixedArity = 3;
G__3514.cljs$lang$applyTo = G__3514__4.cljs$lang$applyTo;
return G__3514;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__3517 = null;
var G__3517__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3517__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3517__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3517__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3517__4 = (function() {
var G__3518__delegate = function (x,y,z,args){
return f.call(null,g.call(null,replcljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3518 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3518__delegate.call(this, x, y, z, args);
};
G__3518.cljs$lang$maxFixedArity = 3;
G__3518.cljs$lang$applyTo = (function (arglist__3519){
var x = replcljs.core.first(arglist__3519);
var y = replcljs.core.first(replcljs.core.next(arglist__3519));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3519)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3519)));
return G__3518__delegate(x, y, z, args);
});
G__3518.cljs$lang$arity$variadic = G__3518__delegate;
return G__3518;
})()
;
G__3517 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3517__0.call(this);
case 1:
return G__3517__1.call(this,x);
case 2:
return G__3517__2.call(this,x,y);
case 3:
return G__3517__3.call(this,x,y,z);
default:
return G__3517__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3517.cljs$lang$maxFixedArity = 3;
G__3517.cljs$lang$applyTo = G__3517__4.cljs$lang$applyTo;
return G__3517;
})()
});
var comp__4 = (function() {
var G__3520__delegate = function (f1,f2,f3,fs){
var fs__$1 = replcljs.core.reverse.call(null,replcljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() {
var G__3521__delegate = function (args){
var ret = replcljs.core.apply.call(null,replcljs.core.first.call(null,fs__$1),args);
var fs__$2 = replcljs.core.next.call(null,fs__$1);
while(true){
if(fs__$2)
{{
var G__3522 = replcljs.core.first.call(null,fs__$2).call(null,ret);
var G__3523 = replcljs.core.next.call(null,fs__$2);
ret = G__3522;
fs__$2 = G__3523;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3521 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3521__delegate.call(this, args);
};
G__3521.cljs$lang$maxFixedArity = 0;
G__3521.cljs$lang$applyTo = (function (arglist__3524){
var args = replcljs.core.seq(arglist__3524);;
return G__3521__delegate(args);
});
G__3521.cljs$lang$arity$variadic = G__3521__delegate;
return G__3521;
})()
;
};
var G__3520 = function (f1,f2,f3,var_args){
var fs = null;
if (replgoog.isDef(var_args)) {
  fs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3520__delegate.call(this, f1, f2, f3, fs);
};
G__3520.cljs$lang$maxFixedArity = 3;
G__3520.cljs$lang$applyTo = (function (arglist__3525){
var f1 = replcljs.core.first(arglist__3525);
var f2 = replcljs.core.first(replcljs.core.next(arglist__3525));
var f3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3525)));
var fs = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3525)));
return G__3520__delegate(f1, f2, f3, fs);
});
G__3520.cljs$lang$arity$variadic = G__3520__delegate;
return G__3520;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
replcljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() {
var G__3526__delegate = function (args){
return replcljs.core.apply.call(null,f,arg1,args);
};
var G__3526 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3526__delegate.call(this, args);
};
G__3526.cljs$lang$maxFixedArity = 0;
G__3526.cljs$lang$applyTo = (function (arglist__3527){
var args = replcljs.core.seq(arglist__3527);;
return G__3526__delegate(args);
});
G__3526.cljs$lang$arity$variadic = G__3526__delegate;
return G__3526;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() {
var G__3528__delegate = function (args){
return replcljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3528 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3528__delegate.call(this, args);
};
G__3528.cljs$lang$maxFixedArity = 0;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var args = replcljs.core.seq(arglist__3529);;
return G__3528__delegate(args);
});
G__3528.cljs$lang$arity$variadic = G__3528__delegate;
return G__3528;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() {
var G__3530__delegate = function (args){
return replcljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3530 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3530__delegate.call(this, args);
};
G__3530.cljs$lang$maxFixedArity = 0;
G__3530.cljs$lang$applyTo = (function (arglist__3531){
var args = replcljs.core.seq(arglist__3531);;
return G__3530__delegate(args);
});
G__3530.cljs$lang$arity$variadic = G__3530__delegate;
return G__3530;
})()
;
});
var partial__5 = (function() {
var G__3532__delegate = function (f,arg1,arg2,arg3,more){
return (function() {
var G__3533__delegate = function (args){
return replcljs.core.apply.call(null,f,arg1,arg2,arg3,replcljs.core.concat.call(null,more,args));
};
var G__3533 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3533__delegate.call(this, args);
};
G__3533.cljs$lang$maxFixedArity = 0;
G__3533.cljs$lang$applyTo = (function (arglist__3534){
var args = replcljs.core.seq(arglist__3534);;
return G__3533__delegate(args);
});
G__3533.cljs$lang$arity$variadic = G__3533__delegate;
return G__3533;
})()
;
};
var G__3532 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__3532__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3532.cljs$lang$maxFixedArity = 4;
G__3532.cljs$lang$applyTo = (function (arglist__3535){
var f = replcljs.core.first(arglist__3535);
var arg1 = replcljs.core.first(replcljs.core.next(arglist__3535));
var arg2 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3535)));
var arg3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3535))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3535))));
return G__3532__delegate(f, arg1, arg2, arg3, more);
});
G__3532.cljs$lang$arity$variadic = G__3532__delegate;
return G__3532;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
replcljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__3536 = null;
var G__3536__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__3536__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__3536__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__3536__4 = (function() {
var G__3537__delegate = function (a,b,c,ds){
return replcljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__3537 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3537__delegate.call(this, a, b, c, ds);
};
G__3537.cljs$lang$maxFixedArity = 3;
G__3537.cljs$lang$applyTo = (function (arglist__3538){
var a = replcljs.core.first(arglist__3538);
var b = replcljs.core.first(replcljs.core.next(arglist__3538));
var c = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3538)));
var ds = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3538)));
return G__3537__delegate(a, b, c, ds);
});
G__3537.cljs$lang$arity$variadic = G__3537__delegate;
return G__3537;
})()
;
G__3536 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__3536__1.call(this,a);
case 2:
return G__3536__2.call(this,a,b);
case 3:
return G__3536__3.call(this,a,b,c);
default:
return G__3536__4.cljs$lang$arity$variadic(a,b,c, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3536.cljs$lang$maxFixedArity = 3;
G__3536.cljs$lang$applyTo = G__3536__4.cljs$lang$applyTo;
return G__3536;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__3539 = null;
var G__3539__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3539__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__3539__4 = (function() {
var G__3540__delegate = function (a,b,c,ds){
return replcljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__3540 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3540__delegate.call(this, a, b, c, ds);
};
G__3540.cljs$lang$maxFixedArity = 3;
G__3540.cljs$lang$applyTo = (function (arglist__3541){
var a = replcljs.core.first(arglist__3541);
var b = replcljs.core.first(replcljs.core.next(arglist__3541));
var c = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3541)));
var ds = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3541)));
return G__3540__delegate(a, b, c, ds);
});
G__3540.cljs$lang$arity$variadic = G__3540__delegate;
return G__3540;
})()
;
G__3539 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3539__2.call(this,a,b);
case 3:
return G__3539__3.call(this,a,b,c);
default:
return G__3539__4.cljs$lang$arity$variadic(a,b,c, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3539.cljs$lang$maxFixedArity = 3;
G__3539.cljs$lang$applyTo = G__3539__4.cljs$lang$applyTo;
return G__3539;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__3542 = null;
var G__3542__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3542__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__3542__4 = (function() {
var G__3543__delegate = function (a,b,c,ds){
return replcljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__3543 = function (a,b,c,var_args){
var ds = null;
if (replgoog.isDef(var_args)) {
  ds = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3543__delegate.call(this, a, b, c, ds);
};
G__3543.cljs$lang$maxFixedArity = 3;
G__3543.cljs$lang$applyTo = (function (arglist__3544){
var a = replcljs.core.first(arglist__3544);
var b = replcljs.core.first(replcljs.core.next(arglist__3544));
var c = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3544)));
var ds = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3544)));
return G__3543__delegate(a, b, c, ds);
});
G__3543.cljs$lang$arity$variadic = G__3543__delegate;
return G__3543;
})()
;
G__3542 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3542__2.call(this,a,b);
case 3:
return G__3542__3.call(this,a,b,c);
default:
return G__3542__4.cljs$lang$arity$variadic(a,b,c, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3542.cljs$lang$maxFixedArity = 3;
G__3542.cljs$lang$applyTo = G__3542__4.cljs$lang$applyTo;
return G__3542;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
replcljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{var c = replcljs.core.chunk_first.call(null,s);
var size = replcljs.core.count.call(null,c);
var b = replcljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3545 = size;
var i_3546 = 0;
while(true){
if((i_3546 < n__2209__auto___3545))
{replcljs.core.chunk_append.call(null,b,f.call(null,(idx + i_3546),replcljs.core._nth.call(null,c,i_3546)));
{
var G__3547 = (i_3546 + 1);
i_3546 = G__3547;
continue;
}
} else
{}
break;
}
return replcljs.core.chunk_cons.call(null,replcljs.core.chunk.call(null,b),mapi.call(null,(idx + size),replcljs.core.chunk_rest.call(null,s)));
} else
{return replcljs.core.cons.call(null,f.call(null,idx,replcljs.core.first.call(null,s)),mapi.call(null,(idx + 1),replcljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
return mapi.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
replcljs.core.keep = (function keep(f,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{var c = replcljs.core.chunk_first.call(null,s);
var size = replcljs.core.count.call(null,c);
var b = replcljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3548 = size;
var i_3549 = 0;
while(true){
if((i_3549 < n__2209__auto___3548))
{var x_3550 = f.call(null,replcljs.core._nth.call(null,c,i_3549));
if((x_3550 == null))
{} else
{replcljs.core.chunk_append.call(null,b,x_3550);
}
{
var G__3551 = (i_3549 + 1);
i_3549 = G__3551;
continue;
}
} else
{}
break;
}
return replcljs.core.chunk_cons.call(null,replcljs.core.chunk.call(null,b),keep.call(null,f,replcljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,replcljs.core.first.call(null,s));
if((x == null))
{return keep.call(null,f,replcljs.core.rest.call(null,s));
} else
{return replcljs.core.cons.call(null,x,keep.call(null,f,replcljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
replcljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{var c = replcljs.core.chunk_first.call(null,s);
var size = replcljs.core.count.call(null,c);
var b = replcljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3558 = size;
var i_3559 = 0;
while(true){
if((i_3559 < n__2209__auto___3558))
{var x_3560 = f.call(null,(idx + i_3559),replcljs.core._nth.call(null,c,i_3559));
if((x_3560 == null))
{} else
{replcljs.core.chunk_append.call(null,b,x_3560);
}
{
var G__3561 = (i_3559 + 1);
i_3559 = G__3561;
continue;
}
} else
{}
break;
}
return replcljs.core.chunk_cons.call(null,replcljs.core.chunk.call(null,b),keepi.call(null,(idx + size),replcljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,replcljs.core.first.call(null,s));
if((x == null))
{return keepi.call(null,(idx + 1),replcljs.core.rest.call(null,s));
} else
{return replcljs.core.cons.call(null,x,keepi.call(null,(idx + 1),replcljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
return keepi.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
replcljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return replcljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{return p.call(null,y);
} else
{return and__3941__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$1))
{return p.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep1__4 = (function() {
var G__3568__delegate = function (x,y,z,args){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep1.call(null,x,y,z);
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto__;
}
})());
};
var G__3568 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3568__delegate.call(this, x, y, z, args);
};
G__3568.cljs$lang$maxFixedArity = 3;
G__3568.cljs$lang$applyTo = (function (arglist__3569){
var x = replcljs.core.first(arglist__3569);
var y = replcljs.core.first(replcljs.core.next(arglist__3569));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3569)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3569)));
return G__3568__delegate(x, y, z, args);
});
G__3568.cljs$lang$arity$variadic = G__3568__delegate;
return G__3568;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{return p2.call(null,x);
} else
{return and__3941__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$2))
{return p2.call(null,y);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p1.call(null,z);
if(replcljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p2.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$4))
{return p2.call(null,z);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__4 = (function() {
var G__3570__delegate = function (x,y,z,args){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep2.call(null,x,y,z);
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.every_QMARK_.call(null,(function (p1__3552_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3552_SHARP_);
if(replcljs.core.truth_(and__3941__auto____$1))
{return p2.call(null,p1__3552_SHARP_);
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3570 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3570__delegate.call(this, x, y, z, args);
};
G__3570.cljs$lang$maxFixedArity = 3;
G__3570.cljs$lang$applyTo = (function (arglist__3571){
var x = replcljs.core.first(arglist__3571);
var y = replcljs.core.first(replcljs.core.next(arglist__3571));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3571)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3571)));
return G__3570__delegate(x, y, z, args);
});
G__3570.cljs$lang$arity$variadic = G__3570__delegate;
return G__3570;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$1))
{return p3.call(null,x);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$4))
{return p3.call(null,y);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(replcljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$4))
{var and__3941__auto____$5 = p3.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$5))
{var and__3941__auto____$6 = p1.call(null,z);
if(replcljs.core.truth_(and__3941__auto____$6))
{var and__3941__auto____$7 = p2.call(null,z);
if(replcljs.core.truth_(and__3941__auto____$7))
{return p3.call(null,z);
} else
{return and__3941__auto____$7;
}
} else
{return and__3941__auto____$6;
}
} else
{return and__3941__auto____$5;
}
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__4 = (function() {
var G__3572__delegate = function (x,y,z,args){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep3.call(null,x,y,z);
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.every_QMARK_.call(null,(function (p1__3553_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3553_SHARP_);
if(replcljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,p1__3553_SHARP_);
if(replcljs.core.truth_(and__3941__auto____$2))
{return p3.call(null,p1__3553_SHARP_);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3572 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3572__delegate.call(this, x, y, z, args);
};
G__3572.cljs$lang$maxFixedArity = 3;
G__3572.cljs$lang$applyTo = (function (arglist__3573){
var x = replcljs.core.first(arglist__3573);
var y = replcljs.core.first(replcljs.core.next(arglist__3573));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3573)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3573)));
return G__3572__delegate(x, y, z, args);
});
G__3572.cljs$lang$arity$variadic = G__3572__delegate;
return G__3572;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() {
var G__3574__delegate = function (p1,p2,p3,ps){
var ps__$1 = replcljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return replcljs.core.every_QMARK_.call(null,(function (p1__3554_SHARP_){
return p1__3554_SHARP_.call(null,x);
}),ps__$1);
});
var epn__2 = (function (x,y){
return replcljs.core.every_QMARK_.call(null,(function (p1__3555_SHARP_){
var and__3941__auto__ = p1__3555_SHARP_.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{return p1__3555_SHARP_.call(null,y);
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){
return replcljs.core.every_QMARK_.call(null,(function (p1__3556_SHARP_){
var and__3941__auto__ = p1__3556_SHARP_.call(null,x);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1__3556_SHARP_.call(null,y);
if(replcljs.core.truth_(and__3941__auto____$1))
{return p1__3556_SHARP_.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__4 = (function() {
var G__3575__delegate = function (x,y,z,args){
return replcljs.core.boolean$.call(null,(function (){var and__3941__auto__ = epn.call(null,x,y,z);
if(replcljs.core.truth_(and__3941__auto__))
{return replcljs.core.every_QMARK_.call(null,(function (p1__3557_SHARP_){
return replcljs.core.every_QMARK_.call(null,p1__3557_SHARP_,args);
}),ps__$1);
} else
{return and__3941__auto__;
}
})());
};
var G__3575 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3575__delegate.call(this, x, y, z, args);
};
G__3575.cljs$lang$maxFixedArity = 3;
G__3575.cljs$lang$applyTo = (function (arglist__3576){
var x = replcljs.core.first(arglist__3576);
var y = replcljs.core.first(replcljs.core.next(arglist__3576));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3576)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3576)));
return G__3575__delegate(x, y, z, args);
});
G__3575.cljs$lang$arity$variadic = G__3575__delegate;
return G__3575;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__3574 = function (p1,p2,p3,var_args){
var ps = null;
if (replgoog.isDef(var_args)) {
  ps = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3574__delegate.call(this, p1, p2, p3, ps);
};
G__3574.cljs$lang$maxFixedArity = 3;
G__3574.cljs$lang$applyTo = (function (arglist__3577){
var p1 = replcljs.core.first(arglist__3577);
var p2 = replcljs.core.first(replcljs.core.next(arglist__3577));
var p3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3577)));
var ps = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3577)));
return G__3574__delegate(p1, p2, p3, ps);
});
G__3574.cljs$lang$arity$variadic = G__3574__delegate;
return G__3574;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
replcljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto__ = p.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto__ = p.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() {
var G__3579__delegate = function (x,y,z,args){
var or__3943__auto__ = sp1.call(null,x,y,z);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.some.call(null,p,args);
}
};
var G__3579 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3579__delegate.call(this, x, y, z, args);
};
G__3579.cljs$lang$maxFixedArity = 3;
G__3579.cljs$lang$applyTo = (function (arglist__3580){
var x = replcljs.core.first(arglist__3580);
var y = replcljs.core.first(replcljs.core.next(arglist__3580));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3580)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3580)));
return G__3579__delegate(x, y, z, args);
});
G__3579.cljs$lang$arity$variadic = G__3579__delegate;
return G__3579;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p1.call(null,z);
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p2.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() {
var G__3581__delegate = function (x,y,z,args){
var or__3943__auto__ = sp2.call(null,x,y,z);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.some.call(null,(function (p1__3562_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3562_SHARP_);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p2.call(null,p1__3562_SHARP_);
}
}),args);
}
};
var G__3581 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3581__delegate.call(this, x, y, z, args);
};
G__3581.cljs$lang$maxFixedArity = 3;
G__3581.cljs$lang$applyTo = (function (arglist__3582){
var x = replcljs.core.first(arglist__3582);
var y = replcljs.core.first(replcljs.core.next(arglist__3582));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3582)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3582)));
return G__3581__delegate(x, y, z, args);
});
G__3581.cljs$lang$arity$variadic = G__3581__delegate;
return G__3581;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{var or__3943__auto____$5 = p3.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$5))
{return or__3943__auto____$5;
} else
{var or__3943__auto____$6 = p1.call(null,z);
if(replcljs.core.truth_(or__3943__auto____$6))
{return or__3943__auto____$6;
} else
{var or__3943__auto____$7 = p2.call(null,z);
if(replcljs.core.truth_(or__3943__auto____$7))
{return or__3943__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() {
var G__3583__delegate = function (x,y,z,args){
var or__3943__auto__ = sp3.call(null,x,y,z);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.some.call(null,(function (p1__3563_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3563_SHARP_);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,p1__3563_SHARP_);
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p3.call(null,p1__3563_SHARP_);
}
}
}),args);
}
};
var G__3583 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3583__delegate.call(this, x, y, z, args);
};
G__3583.cljs$lang$maxFixedArity = 3;
G__3583.cljs$lang$applyTo = (function (arglist__3584){
var x = replcljs.core.first(arglist__3584);
var y = replcljs.core.first(replcljs.core.next(arglist__3584));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3584)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3584)));
return G__3583__delegate(x, y, z, args);
});
G__3583.cljs$lang$arity$variadic = G__3583__delegate;
return G__3583;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() {
var G__3585__delegate = function (p1,p2,p3,ps){
var ps__$1 = replcljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return replcljs.core.some.call(null,(function (p1__3564_SHARP_){
return p1__3564_SHARP_.call(null,x);
}),ps__$1);
});
var spn__2 = (function (x,y){
return replcljs.core.some.call(null,(function (p1__3565_SHARP_){
var or__3943__auto__ = p1__3565_SHARP_.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p1__3565_SHARP_.call(null,y);
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){
return replcljs.core.some.call(null,(function (p1__3566_SHARP_){
var or__3943__auto__ = p1__3566_SHARP_.call(null,x);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1__3566_SHARP_.call(null,y);
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p1__3566_SHARP_.call(null,z);
}
}
}),ps__$1);
});
var spn__4 = (function() {
var G__3586__delegate = function (x,y,z,args){
var or__3943__auto__ = spn.call(null,x,y,z);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.some.call(null,(function (p1__3567_SHARP_){
return replcljs.core.some.call(null,p1__3567_SHARP_,args);
}),ps__$1);
}
};
var G__3586 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3586__delegate.call(this, x, y, z, args);
};
G__3586.cljs$lang$maxFixedArity = 3;
G__3586.cljs$lang$applyTo = (function (arglist__3587){
var x = replcljs.core.first(arglist__3587);
var y = replcljs.core.first(replcljs.core.next(arglist__3587));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3587)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3587)));
return G__3586__delegate(x, y, z, args);
});
G__3586.cljs$lang$arity$variadic = G__3586__delegate;
return G__3586;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__3585 = function (p1,p2,p3,var_args){
var ps = null;
if (replgoog.isDef(var_args)) {
  ps = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3585__delegate.call(this, p1, p2, p3, ps);
};
G__3585.cljs$lang$maxFixedArity = 3;
G__3585.cljs$lang$applyTo = (function (arglist__3588){
var p1 = replcljs.core.first(arglist__3588);
var p2 = replcljs.core.first(replcljs.core.next(arglist__3588));
var p3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3588)));
var ps = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3588)));
return G__3585__delegate(p1, p2, p3, ps);
});
G__3585.cljs$lang$arity$variadic = G__3585__delegate;
return G__3585;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
replcljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{var c = replcljs.core.chunk_first.call(null,s);
var size = replcljs.core.count.call(null,c);
var b = replcljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3589 = size;
var i_3590 = 0;
while(true){
if((i_3590 < n__2209__auto___3589))
{replcljs.core.chunk_append.call(null,b,f.call(null,replcljs.core._nth.call(null,c,i_3590)));
{
var G__3591 = (i_3590 + 1);
i_3590 = G__3591;
continue;
}
} else
{}
break;
}
return replcljs.core.chunk_cons.call(null,replcljs.core.chunk.call(null,b),map.call(null,f,replcljs.core.chunk_rest.call(null,s)));
} else
{return replcljs.core.cons.call(null,f.call(null,replcljs.core.first.call(null,s)),map.call(null,f,replcljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new replcljs.core.LazySeq(null,false,(function (){
var s1 = replcljs.core.seq.call(null,c1);
var s2 = replcljs.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.cons.call(null,f.call(null,replcljs.core.first.call(null,s1),replcljs.core.first.call(null,s2)),map.call(null,f,replcljs.core.rest.call(null,s1),replcljs.core.rest.call(null,s2)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new replcljs.core.LazySeq(null,false,(function (){
var s1 = replcljs.core.seq.call(null,c1);
var s2 = replcljs.core.seq.call(null,c2);
var s3 = replcljs.core.seq.call(null,c3);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{var and__3941__auto____$1 = s2;
if(and__3941__auto____$1)
{return s3;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.cons.call(null,f.call(null,replcljs.core.first.call(null,s1),replcljs.core.first.call(null,s2),replcljs.core.first.call(null,s3)),map.call(null,f,replcljs.core.rest.call(null,s1),replcljs.core.rest.call(null,s2),replcljs.core.rest.call(null,s3)));
} else
{return null;
}
}),null));
});
var map__5 = (function() {
var G__3592__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new replcljs.core.LazySeq(null,false,(function (){
var ss = map.call(null,replcljs.core.seq,cs);
if(replcljs.core.every_QMARK_.call(null,replcljs.core.identity,ss))
{return replcljs.core.cons.call(null,map.call(null,replcljs.core.first,ss),step.call(null,map.call(null,replcljs.core.rest,ss)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__3578_SHARP_){
return replcljs.core.apply.call(null,f,p1__3578_SHARP_);
}),step.call(null,replcljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3592 = function (f,c1,c2,c3,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__3592__delegate.call(this, f, c1, c2, c3, colls);
};
G__3592.cljs$lang$maxFixedArity = 4;
G__3592.cljs$lang$applyTo = (function (arglist__3593){
var f = replcljs.core.first(arglist__3593);
var c1 = replcljs.core.first(replcljs.core.next(arglist__3593));
var c2 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3593)));
var c3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3593))));
var colls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3593))));
return G__3592__delegate(f, c1, c2, c3, colls);
});
G__3592.cljs$lang$arity$variadic = G__3592__delegate;
return G__3592;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
replcljs.core.take = (function take(n,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return replcljs.core.cons.call(null,replcljs.core.first.call(null,s),take.call(null,(n - 1),replcljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
replcljs.core.drop = (function drop(n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = replcljs.core.seq.call(null,coll__$1);
if(replcljs.core.truth_((function (){var and__3941__auto__ = (n__$1 > 0);
if(and__3941__auto__)
{return s;
} else
{return and__3941__auto__;
}
})()))
{{
var G__3594 = (n__$1 - 1);
var G__3595 = replcljs.core.rest.call(null,s);
n__$1 = G__3594;
coll__$1 = G__3595;
continue;
}
} else
{return s;
}
break;
}
});
return (new replcljs.core.LazySeq(null,false,(function (){
return step.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
replcljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return replcljs.core.map.call(null,(function (x,_){
return x;
}),s,replcljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
replcljs.core.take_last = (function take_last(n,coll){
var s = replcljs.core.seq.call(null,coll);
var lead = replcljs.core.seq.call(null,replcljs.core.drop.call(null,n,coll));
while(true){
if(lead)
{{
var G__3596 = replcljs.core.next.call(null,s);
var G__3597 = replcljs.core.next.call(null,lead);
s = G__3596;
lead = G__3597;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
replcljs.core.drop_while = (function drop_while(pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = replcljs.core.seq.call(null,coll__$1);
if(replcljs.core.truth_((function (){var and__3941__auto__ = s;
if(and__3941__auto__)
{return pred__$1.call(null,replcljs.core.first.call(null,s));
} else
{return and__3941__auto__;
}
})()))
{{
var G__3598 = pred__$1;
var G__3599 = replcljs.core.rest.call(null,s);
pred__$1 = G__3598;
coll__$1 = G__3599;
continue;
}
} else
{return s;
}
break;
}
});
return (new replcljs.core.LazySeq(null,false,(function (){
return step.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
replcljs.core.cycle = (function cycle(coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return replcljs.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
replcljs.core.split_at = (function split_at(n,coll){
return replcljs.core.PersistentVector.fromArray([replcljs.core.take.call(null,n,coll),replcljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
replcljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new replcljs.core.LazySeq(null,false,(function (){
return replcljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return replcljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
replcljs.core.replicate = (function replicate(n,x){
return replcljs.core.take.call(null,n,replcljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
replcljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new replcljs.core.LazySeq(null,false,(function (){
return replcljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return replcljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
replcljs.core.iterate = (function iterate(f,x){
return replcljs.core.cons.call(null,x,(new replcljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
replcljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new replcljs.core.LazySeq(null,false,(function (){
var s1 = replcljs.core.seq.call(null,c1);
var s2 = replcljs.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return replcljs.core.cons.call(null,replcljs.core.first.call(null,s1),replcljs.core.cons.call(null,replcljs.core.first.call(null,s2),interleave.call(null,replcljs.core.rest.call(null,s1),replcljs.core.rest.call(null,s2))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() {
var G__3600__delegate = function (c1,c2,colls){
return (new replcljs.core.LazySeq(null,false,(function (){
var ss = replcljs.core.map.call(null,replcljs.core.seq,replcljs.core.conj.call(null,colls,c2,c1));
if(replcljs.core.every_QMARK_.call(null,replcljs.core.identity,ss))
{return replcljs.core.concat.call(null,replcljs.core.map.call(null,replcljs.core.first,ss),replcljs.core.apply.call(null,interleave,replcljs.core.map.call(null,replcljs.core.rest,ss)));
} else
{return null;
}
}),null));
};
var G__3600 = function (c1,c2,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3600__delegate.call(this, c1, c2, colls);
};
G__3600.cljs$lang$maxFixedArity = 2;
G__3600.cljs$lang$applyTo = (function (arglist__3601){
var c1 = replcljs.core.first(arglist__3601);
var c2 = replcljs.core.first(replcljs.core.next(arglist__3601));
var colls = replcljs.core.rest(replcljs.core.next(arglist__3601));
return G__3600__delegate(c1, c2, colls);
});
G__3600.cljs$lang$arity$variadic = G__3600__delegate;
return G__3600;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
replcljs.core.interpose = (function interpose(sep,coll){
return replcljs.core.drop.call(null,1,replcljs.core.interleave.call(null,replcljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
replcljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;
return replcljs.core.cons.call(null,replcljs.core.first.call(null,coll__$1),cat.call(null,replcljs.core.rest.call(null,coll__$1),colls__$1));
} else
{if(replcljs.core.seq.call(null,colls__$1))
{return cat.call(null,replcljs.core.first.call(null,colls__$1),replcljs.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
replcljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return replcljs.core.flatten1.call(null,replcljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() {
var G__3602__delegate = function (f,coll,colls){
return replcljs.core.flatten1.call(null,replcljs.core.apply.call(null,replcljs.core.map,f,coll,colls));
};
var G__3602 = function (f,coll,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return G__3602__delegate.call(this, f, coll, colls);
};
G__3602.cljs$lang$maxFixedArity = 2;
G__3602.cljs$lang$applyTo = (function (arglist__3603){
var f = replcljs.core.first(arglist__3603);
var coll = replcljs.core.first(replcljs.core.next(arglist__3603));
var colls = replcljs.core.rest(replcljs.core.next(arglist__3603));
return G__3602__delegate(f, coll, colls);
});
G__3602.cljs$lang$arity$variadic = G__3602__delegate;
return G__3602;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, replcljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
replcljs.core.filter = (function filter(pred,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.chunked_seq_QMARK_.call(null,s))
{var c = replcljs.core.chunk_first.call(null,s);
var size = replcljs.core.count.call(null,c);
var b = replcljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3604 = size;
var i_3605 = 0;
while(true){
if((i_3605 < n__2209__auto___3604))
{if(replcljs.core.truth_(pred.call(null,replcljs.core._nth.call(null,c,i_3605))))
{replcljs.core.chunk_append.call(null,b,replcljs.core._nth.call(null,c,i_3605));
} else
{}
{
var G__3606 = (i_3605 + 1);
i_3605 = G__3606;
continue;
}
} else
{}
break;
}
return replcljs.core.chunk_cons.call(null,replcljs.core.chunk.call(null,b),filter.call(null,pred,replcljs.core.chunk_rest.call(null,s)));
} else
{var f = replcljs.core.first.call(null,s);
var r = replcljs.core.rest.call(null,s);
if(replcljs.core.truth_(pred.call(null,f)))
{return replcljs.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
replcljs.core.remove = (function remove(pred,coll){
return replcljs.core.filter.call(null,replcljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
replcljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new replcljs.core.LazySeq(null,false,(function (){
return replcljs.core.cons.call(null,node,(replcljs.core.truth_(branch_QMARK_.call(null,node))?replcljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
replcljs.core.flatten = (function flatten(x){
return replcljs.core.filter.call(null,(function (p1__3607_SHARP_){
return !(replcljs.core.sequential_QMARK_.call(null,p1__3607_SHARP_));
}),replcljs.core.rest.call(null,replcljs.core.tree_seq.call(null,replcljs.core.sequential_QMARK_,replcljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
replcljs.core.into = (function into(to,from){
if((function (){var G__3609 = to;
if(G__3609)
{if((function (){var or__3943__auto__ = (G__3609.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3609.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__3609.cljs$lang$protocol_mask$partition1$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IEditableCollection,G__3609);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IEditableCollection,G__3609);
}
})())
{return replcljs.core.persistent_BANG_.call(null,replcljs.core.reduce.call(null,replcljs.core._conj_BANG_,replcljs.core.transient$.call(null,to),from));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
replcljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return replcljs.core.persistent_BANG_.call(null,replcljs.core.reduce.call(null,(function (v,o){
return replcljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),replcljs.core.transient$.call(null,replcljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return replcljs.core.into.call(null,replcljs.core.PersistentVector.EMPTY,replcljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return replcljs.core.into.call(null,replcljs.core.PersistentVector.EMPTY,replcljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() {
var G__3610__delegate = function (f,c1,c2,c3,colls){
return replcljs.core.into.call(null,replcljs.core.PersistentVector.EMPTY,replcljs.core.apply.call(null,replcljs.core.map,f,c1,c2,c3,colls));
};
var G__3610 = function (f,c1,c2,c3,var_args){
var colls = null;
if (replgoog.isDef(var_args)) {
  colls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__3610__delegate.call(this, f, c1, c2, c3, colls);
};
G__3610.cljs$lang$maxFixedArity = 4;
G__3610.cljs$lang$applyTo = (function (arglist__3611){
var f = replcljs.core.first(arglist__3611);
var c1 = replcljs.core.first(replcljs.core.next(arglist__3611));
var c2 = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3611)));
var c3 = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3611))));
var colls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3611))));
return G__3610__delegate(f, c1, c2, c3, colls);
});
G__3610.cljs$lang$arity$variadic = G__3610__delegate;
return G__3610;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
replcljs.core.filterv = (function filterv(pred,coll){
return replcljs.core.persistent_BANG_.call(null,replcljs.core.reduce.call(null,(function (v,o){
if(replcljs.core.truth_(pred.call(null,o)))
{return replcljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),replcljs.core.transient$.call(null,replcljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
replcljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = replcljs.core.take.call(null,n,s);
if((n === replcljs.core.count.call(null,p)))
{return replcljs.core.cons.call(null,p,partition.call(null,n,step,replcljs.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = replcljs.core.take.call(null,n,s);
if((n === replcljs.core.count.call(null,p)))
{return replcljs.core.cons.call(null,p,partition.call(null,n,step,pad,replcljs.core.drop.call(null,step,s)));
} else
{return replcljs.core.list.call(null,replcljs.core.take.call(null,n,replcljs.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
replcljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return replcljs.core.reduce.call(null,replcljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = replcljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = replcljs.core.seq.call(null,ks);
while(true){
if(ks__$1)
{var m__$2 = replcljs.core._lookup.call(null,m__$1,replcljs.core.first.call(null,ks__$1),sentinel);
if((sentinel === m__$2))
{return not_found;
} else
{{
var G__3612 = sentinel;
var G__3613 = m__$2;
var G__3614 = replcljs.core.next.call(null,ks__$1);
sentinel = G__3612;
m__$1 = G__3613;
ks__$1 = G__3614;
continue;
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
replcljs.core.assoc_in = (function assoc_in(m,p__3615,v){
var vec__3617 = p__3615;
var k = replcljs.core.nth.call(null,vec__3617,0,null);
var ks = replcljs.core.nthnext.call(null,vec__3617,1);
if(replcljs.core.truth_(ks))
{return replcljs.core.assoc.call(null,m,k,assoc_in.call(null,replcljs.core._lookup.call(null,m,k,null),ks,v));
} else
{return replcljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
replcljs.core.update_in = (function() {
var update_in__delegate = function (m,p__3618,f,args){
var vec__3620 = p__3618;
var k = replcljs.core.nth.call(null,vec__3620,0,null);
var ks = replcljs.core.nthnext.call(null,vec__3620,1);
if(replcljs.core.truth_(ks))
{return replcljs.core.assoc.call(null,m,k,replcljs.core.apply.call(null,update_in,replcljs.core._lookup.call(null,m,k,null),ks,f,args));
} else
{return replcljs.core.assoc.call(null,m,k,replcljs.core.apply.call(null,f,replcljs.core._lookup.call(null,m,k,null),args));
}
};
var update_in = function (m,p__3618,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return update_in__delegate.call(this, m, p__3618, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3621){
var m = replcljs.core.first(arglist__3621);
var p__3618 = replcljs.core.first(replcljs.core.next(arglist__3621));
var f = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3621)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3621)));
return update_in__delegate(m, p__3618, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;
replgoog.provide('replcljs.core.Vector');

/**
* @constructor
*/
replcljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
replcljs.core.Vector.cljs$lang$type = true;
replcljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Vector");
});
replcljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Vector");
});
replcljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
replcljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
replcljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var new_array = self__.array.slice();
(new_array[k] = v);
return (new replcljs.core.Vector(self__.meta,new_array,null));
});
replcljs.core.Vector.prototype.call = (function() {
var G__3626 = null;
var G__3626__2 = (function (this_sym3624,k){
var self__ = this;
var this_sym3624__$1 = this;
var coll = this_sym3624__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3626__3 = (function (this_sym3625,k,not_found){
var self__ = this;
var this_sym3625__$1 = this;
var coll = this_sym3625__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3626 = function(this_sym3625,k,not_found){
switch(arguments.length){
case 2:
return G__3626__2.call(this,this_sym3625,k);
case 3:
return G__3626__3.call(this,this_sym3625,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3626;
})()
;
replcljs.core.Vector.prototype.apply = (function (this_sym3622,args3623){
var self__ = this;
return this_sym3622.call.apply(this_sym3622,[this_sym3622].concat(args3623.slice()));
});
replcljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var new_array = self__.array.slice();
new_array.push(o);
return (new replcljs.core.Vector(self__.meta,new_array,null));
});
replcljs.core.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,self__.array,f);
});
replcljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return replcljs.core.ci_reduce.call(null,self__.array,f,start);
});
replcljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var vector_seq = (function vector_seq(i){
return (new replcljs.core.LazySeq(null,false,(function (){
if((i < self__.array.length))
{return replcljs.core.cons.call(null,(self__.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq.call(null,0);
} else
{return null;
}
});
replcljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.array.length;
});
replcljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var count = self__.array.length;
if((count > 0))
{return (self__.array[(count - 1)]);
} else
{return null;
}
});
replcljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var new_array = self__.array.slice();
new_array.pop();
return (new replcljs.core.Vector(self__.meta,new_array,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
replcljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
replcljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.Vector(meta__$1,self__.array,self__.__hash));
});
replcljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return null;
}
});
replcljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return not_found;
}
});
replcljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.Vector.EMPTY,self__.meta);
});
replcljs.core.Vector.EMPTY = (new replcljs.core.Vector(null,[],0));
replcljs.core.Vector.fromArray = (function (xs){
return (new replcljs.core.Vector(null,xs,null));
});
replgoog.provide('replcljs.core.VectorNode');

/**
* @constructor
*/
replcljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
replcljs.core.VectorNode.cljs$lang$type = true;
replcljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1990__auto__){
return replcljs.core.list.call(null,"replcljs.core/VectorNode");
});
replcljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__1990__auto__,writer__1991__auto__,opts__1992__auto__){
return replcljs.core._write.call(null,writer__1991__auto__,"replcljs.core/VectorNode");
});
replcljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new replcljs.core.VectorNode(edit,replcljs.core.make_array.call(null,32)));
});
replcljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
replcljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
replcljs.core.pv_clone_node = (function pv_clone_node(node){
return (new replcljs.core.VectorNode(node.edit,node.arr.slice()));
});
replcljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
replcljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;
var r = replcljs.core.pv_fresh_node.call(null,edit);
var _ = replcljs.core.pv_aset.call(null,r,0,embed);
{
var G__3627 = (ll - 5);
var G__3628 = r;
ll = G__3627;
ret = G__3628;
continue;
}
}
break;
}
});
replcljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = replcljs.core.pv_clone_node.call(null,parent);
var subidx = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{replcljs.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = replcljs.core.pv_aget.call(null,parent,subidx);
if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - 5),child,tailnode);
replcljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = replcljs.core.new_path.call(null,null,(level - 5),tailnode);
replcljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
replcljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < pv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= replcljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;
var level = pv.shift;
while(true){
if((level > 0))
{{
var G__3629 = replcljs.core.pv_aget.call(null,node,((i >>> level) & 31));
var G__3630 = (level - 5);
node = G__3629;
level = G__3630;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([replcljs.core.str("No item "),replcljs.core.str(i),replcljs.core.str(" in vector of length "),replcljs.core.str(pv.cnt)].join('')));
}
});
replcljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = replcljs.core.pv_clone_node.call(null,node);
if((level === 0))
{replcljs.core.pv_aset.call(null,ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);
replcljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - 5),replcljs.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
replcljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = pop_tail.call(null,pv,(level - 5),replcljs.core.pv_aget.call(null,node,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{var ret = replcljs.core.pv_clone_node.call(null,node);
replcljs.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret = replcljs.core.pv_clone_node.call(null,node);
replcljs.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});
replgoog.provide('replcljs.core.PersistentVector');

/**
* @constructor
*/
replcljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
replcljs.core.PersistentVector.cljs$lang$type = true;
replcljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentVector");
});
replcljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentVector");
});
replcljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new replcljs.core.TransientVector(self__.cnt,self__.shift,replcljs.core.tv_editable_root.call(null,self__.root),replcljs.core.tv_editable_tail.call(null,self__.tail)));
});
replcljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
replcljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
replcljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= k);
if(and__3941__auto__)
{return (k < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((replcljs.core.tail_off.call(null,coll) <= k))
{var new_tail = self__.tail.slice();
(new_tail[(k & 31)] = v);
return (new replcljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new replcljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,replcljs.core.do_assoc.call(null,coll,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("Index "),replcljs.core.str(k),replcljs.core.str(" out of bounds  [0,"),replcljs.core.str(self__.cnt),replcljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
replcljs.core.PersistentVector.prototype.call = (function() {
var G__3635 = null;
var G__3635__2 = (function (this_sym3633,k){
var self__ = this;
var this_sym3633__$1 = this;
var coll = this_sym3633__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3635__3 = (function (this_sym3634,k,not_found){
var self__ = this;
var this_sym3634__$1 = this;
var coll = this_sym3634__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3635 = function(this_sym3634,k,not_found){
switch(arguments.length){
case 2:
return G__3635__2.call(this,this_sym3634,k);
case 3:
return G__3635__3.call(this,this_sym3634,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3635;
})()
;
replcljs.core.PersistentVector.prototype.apply = (function (this_sym3631,args3632){
var self__ = this;
return this_sym3631.call.apply(this_sym3631,[this_sym3631].concat(args3632.slice()));
});
replcljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var step_init = [0,init];
var i = 0;
while(true){
if((i < self__.cnt))
{var arr = replcljs.core.array_for.call(null,v,i);
var len = arr.length;
var init__$1 = (function (){var j = 0;
var init__$1 = (step_init[1]);
while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));
if(replcljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__3636 = (j + 1);
var G__3637 = init__$2;
j = G__3636;
init__$1 = G__3637;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();
if(replcljs.core.reduced_QMARK_.call(null,init__$1))
{return replcljs.core.deref.call(null,init__$1);
} else
{{
var G__3638 = (i + (step_init[0]));
i = G__3638;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
replcljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(((self__.cnt - replcljs.core.tail_off.call(null,coll)) < 32))
{var new_tail = self__.tail.slice();
new_tail.push(o);
return (new replcljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = replcljs.core.pv_fresh_node.call(null,null);
replcljs.core.pv_aset.call(null,n_r,0,self__.root);
replcljs.core.pv_aset.call(null,n_r,1,replcljs.core.new_path.call(null,null,self__.shift,(new replcljs.core.VectorNode(null,self__.tail))));
return n_r;
})():replcljs.core.push_tail.call(null,coll,self__.shift,self__.root,(new replcljs.core.VectorNode(null,self__.tail))));
return (new replcljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
replcljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return (new replcljs.core.RSeq(coll,(self__.cnt - 1),null));
} else
{return replcljs.core.List.EMPTY;
}
});
replcljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
replcljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
replcljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,v,f);
});
replcljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return replcljs.core.ci_reduce.call(null,v,f,start);
});
replcljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{return null;
} else
{return replcljs.core.chunked_seq.call(null,coll,0,0);
}
});
replcljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
replcljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(self__.cnt - 1));
} else
{return null;
}
});
replcljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return replcljs.core._with_meta.call(null,replcljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - replcljs.core.tail_off.call(null,coll))))
{return (new replcljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail = replcljs.core.array_for.call(null,coll,(self__.cnt - 2));
var nr = replcljs.core.pop_tail.call(null,coll,self__.shift,self__.root);
var new_root = (((nr == null))?replcljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - 1);
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (replcljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{return (new replcljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),replcljs.core.pv_aget.call(null,new_root,0),new_tail,null));
} else
{return (new replcljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
replcljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
replcljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
replcljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return (replcljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
replcljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
replcljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentVector.EMPTY,self__.meta);
});
replcljs.core.PersistentVector.EMPTY_NODE = replcljs.core.pv_fresh_node.call(null,null);
replcljs.core.PersistentVector.EMPTY = (new replcljs.core.PersistentVector(null,0,5,replcljs.core.PersistentVector.EMPTY_NODE,[],0));
replcljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = (((no_clone === true))?xs:xs.slice());
if((l < 32))
{return (new replcljs.core.PersistentVector(null,l,5,replcljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);
var v = (new replcljs.core.PersistentVector(null,32,5,replcljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = 32;
var out = replcljs.core._as_transient.call(null,v);
while(true){
if((i < l))
{{
var G__3639 = (i + 1);
var G__3640 = replcljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__3639;
out = G__3640;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
replcljs.core.vec = (function vec(coll){
return replcljs.core._persistent_BANG_.call(null,replcljs.core.reduce.call(null,replcljs.core._conj_BANG_,replcljs.core._as_transient.call(null,replcljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
replcljs.core.vector = (function() {
var vector__delegate = function (args){
return replcljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3641){
var args = replcljs.core.seq(arglist__3641);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;
replgoog.provide('replcljs.core.ChunkedSeq');

/**
* @constructor
*/
replcljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
replcljs.core.ChunkedSeq.cljs$lang$type = true;
replcljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ChunkedSeq");
});
replcljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ChunkedSeq");
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = replcljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return null;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
replcljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return (self__.node[self__.off]);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = replcljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return replcljs.core.List.EMPTY;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < replcljs.core._count.call(null,self__.vec)))?replcljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return null;
} else
{return s;
}
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return replcljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentVector.EMPTY,self__.meta);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.array_chunk.call(null,self__.node,self__.off);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < replcljs.core._count.call(null,self__.vec)))?replcljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return replcljs.core.List.EMPTY;
} else
{return s;
}
});
replcljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,replcljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new replcljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;
replgoog.provide('replcljs.core.Subvec');

/**
* @constructor
*/
replcljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
replcljs.core.Subvec.cljs$lang$type = true;
replcljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Subvec");
});
replcljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Subvec");
});
replcljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
replcljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
replcljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var v_pos = (self__.start + key);
return (new replcljs.core.Subvec(self__.meta,replcljs.core._assoc.call(null,self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null));
});
replcljs.core.Subvec.prototype.call = (function() {
var G__3646 = null;
var G__3646__2 = (function (this_sym3644,k){
var self__ = this;
var this_sym3644__$1 = this;
var coll = this_sym3644__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3646__3 = (function (this_sym3645,k,not_found){
var self__ = this;
var this_sym3645__$1 = this;
var coll = this_sym3645__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3646 = function(this_sym3645,k,not_found){
switch(arguments.length){
case 2:
return G__3646__2.call(this,this_sym3645,k);
case 3:
return G__3646__3.call(this,this_sym3645,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3646;
})()
;
replcljs.core.Subvec.prototype.apply = (function (this_sym3642,args3643){
var self__ = this;
return this_sym3642.call.apply(this_sym3642,[this_sym3642].concat(args3643.slice()));
});
replcljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.Subvec(self__.meta,replcljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
replcljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,coll,f);
});
replcljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
return replcljs.core.ci_reduce.call(null,coll,f,start__$1);
});
replcljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var subvec_seq = (function subvec_seq(i){
if((i === self__.end))
{return null;
} else
{return replcljs.core.cons.call(null,replcljs.core._nth.call(null,self__.v,i),(new replcljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq.call(null,self__.start);
});
replcljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.end - self__.start);
});
replcljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._nth.call(null,self__.v,(self__.end - 1));
});
replcljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new replcljs.core.Subvec(self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
replcljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
replcljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.Subvec(meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
replcljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return replcljs.core._nth.call(null,self__.v,(self__.start + n));
});
replcljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
return replcljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
});
replcljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.Vector.EMPTY,self__.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
replcljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,replcljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new replcljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
replcljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new replcljs.core.VectorNode(edit,node.arr.slice()));
}
});
replcljs.core.tv_editable_root = (function tv_editable_root(node){
return (new replcljs.core.VectorNode({},node.arr.slice()));
});
replcljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = replcljs.core.make_array.call(null,32);
replcljs.core.array_copy.call(null,tl,0,ret,0,tl.length);
return ret;
});
replcljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = replcljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx = (((tv.cnt - 1) >>> level) & 31);
replcljs.core.pv_aset.call(null,ret,subidx,(((level === 5))?tail_node:(function (){var child = replcljs.core.pv_aget.call(null,ret,subidx);
if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - 5),child,tail_node);
} else
{return replcljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
replcljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = replcljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = tv_pop_tail.call(null,tv,(level - 5),replcljs.core.pv_aget.call(null,node__$1,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{replcljs.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{replcljs.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
replcljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < tv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= replcljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > 0))
{{
var G__3647 = replcljs.core.tv_ensure_editable.call(null,root.edit,replcljs.core.pv_aget.call(null,node,((i >>> level) & 31)));
var G__3648 = (level - 5);
node = G__3647;
level = G__3648;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([replcljs.core.str("No item "),replcljs.core.str(i),replcljs.core.str(" in transient vector of length "),replcljs.core.str(tv.cnt)].join('')));
}
});
replgoog.provide('replcljs.core.TransientVector');

/**
* @constructor
*/
replcljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
replcljs.core.TransientVector.cljs$lang$type = true;
replcljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/TransientVector");
});
replcljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/TransientVector");
});
replcljs.core.TransientVector.prototype.call = (function() {
var G__3653 = null;
var G__3653__2 = (function (this_sym3651,k){
var self__ = this;
var this_sym3651__$1 = this;
var coll = this_sym3651__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3653__3 = (function (this_sym3652,k,not_found){
var self__ = this;
var this_sym3652__$1 = this;
var coll = this_sym3652__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3653 = function(this_sym3652,k,not_found){
switch(arguments.length){
case 2:
return G__3653__2.call(this,this_sym3652,k);
case 3:
return G__3653__3.call(this,this_sym3652,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3653;
})()
;
replcljs.core.TransientVector.prototype.apply = (function (this_sym3649,args3650){
var self__ = this;
return this_sym3649.call.apply(this_sym3649,[this_sym3649].concat(args3650.slice()));
});
replcljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
replcljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
replcljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(self__.root.edit)
{return (replcljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
replcljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
replcljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
replcljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
if(self__.root.edit)
{if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((replcljs.core.tail_off.call(null,tcoll) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root = (function go(level,node){
var node__$1 = replcljs.core.tv_ensure_editable.call(null,self__.root.edit,node);
if((level === 0))
{replcljs.core.pv_aset.call(null,node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);
replcljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - 5),replcljs.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);
self__.root = new_root;
return tcoll;
}
} else
{if((n === self__.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("Index "),replcljs.core.str(n),replcljs.core.str(" out of bounds for TransientVector of length"),replcljs.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
replcljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail = replcljs.core.editable_array_for.call(null,tcoll,(self__.cnt - 2));
var new_root = (function (){var nr = replcljs.core.tv_pop_tail.call(null,tcoll,self__.shift,self__.root);
if(!((nr == null)))
{return nr;
} else
{return (new replcljs.core.VectorNode(self__.root.edit,replcljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (replcljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{var new_root__$1 = replcljs.core.tv_ensure_editable.call(null,self__.root.edit,replcljs.core.pv_aget.call(null,new_root,0));
self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
replcljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
replcljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(self__.root.edit)
{if(((self__.cnt - replcljs.core.tail_off.call(null,tcoll)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var tail_node = (new replcljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = replcljs.core.make_array.call(null,32);
(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = replcljs.core.make_array.call(null,32);
var new_shift = (self__.shift + 5);
(new_root_array[0] = self__.root);
(new_root_array[1] = replcljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new replcljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var new_root = replcljs.core.tv_push_tail.call(null,tcoll,self__.shift,self__.root,tail_node);
self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
replcljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - replcljs.core.tail_off.call(null,tcoll));
var trimmed_tail = replcljs.core.make_array.call(null,len);
replcljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);
return (new replcljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
replgoog.provide('replcljs.core.PersistentQueueSeq');

/**
* @constructor
*/
replcljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
replcljs.core.PersistentQueueSeq.cljs$lang$type = true;
replcljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentQueueSeq");
});
replcljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentQueueSeq");
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._first.call(null,self__.front);
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var temp__4090__auto__ = replcljs.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new replcljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new replcljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replgoog.provide('replcljs.core.PersistentQueue');

/**
* @constructor
*/
replcljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
replcljs.core.PersistentQueue.cljs$lang$type = true;
replcljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentQueue");
});
replcljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentQueue");
});
replcljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(replcljs.core.truth_(self__.front))
{return (new replcljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,replcljs.core.conj.call(null,(function (){var or__3943__auto__ = self__.rear;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new replcljs.core.PersistentQueue(self__.meta,(self__.count + 1),replcljs.core.conj.call(null,self__.front,o),replcljs.core.PersistentVector.EMPTY,null));
}
});
replcljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var rear__$1 = replcljs.core.seq.call(null,self__.rear);
if(replcljs.core.truth_((function (){var or__3943__auto__ = self__.front;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return rear__$1;
}
})()))
{return (new replcljs.core.PersistentQueueSeq(null,self__.front,replcljs.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
replcljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
replcljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._first.call(null,self__.front);
});
replcljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if(replcljs.core.truth_(self__.front))
{var temp__4090__auto__ = replcljs.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new replcljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new replcljs.core.PersistentQueue(self__.meta,(self__.count - 1),replcljs.core.seq.call(null,self__.rear),replcljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
replcljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.first.call(null,self__.front);
});
replcljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.rest.call(null,replcljs.core.seq.call(null,coll));
});
replcljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
replcljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.PersistentQueue.EMPTY;
});
replcljs.core.PersistentQueue.EMPTY = (new replcljs.core.PersistentQueue(null,0,null,replcljs.core.PersistentVector.EMPTY,0));
replgoog.provide('replcljs.core.NeverEquiv');

/**
* @constructor
*/
replcljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
replcljs.core.NeverEquiv.cljs$lang$type = true;
replcljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/NeverEquiv");
});
replcljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/NeverEquiv");
});
replcljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return false;
});
replcljs.core.never_equiv = (new replcljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
replcljs.core.equiv_map = (function equiv_map(x,y){
return replcljs.core.boolean$.call(null,((replcljs.core.map_QMARK_.call(null,y))?(((replcljs.core.count.call(null,x) === replcljs.core.count.call(null,y)))?replcljs.core.every_QMARK_.call(null,replcljs.core.identity,replcljs.core.map.call(null,(function (xkv){
return replcljs.core._EQ_.call(null,replcljs.core._lookup.call(null,y,replcljs.core.first.call(null,xkv),replcljs.core.never_equiv),replcljs.core.second.call(null,xkv));
}),x)):null):null));
});
replcljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = 0;
while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__3654 = (i + incr);
i = G__3654;
continue;
}
}
} else
{return null;
}
break;
}
});
replcljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = replcljs.core.hash.call(null,a);
var b__$1 = replcljs.core.hash.call(null,b);
if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
replcljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var out = replcljs.core.with_meta.call(null,replcljs.core.PersistentHashMap.EMPTY,replcljs.core.meta.call(null,m));
var i = 0;
var out__$1 = replcljs.core.transient$.call(null,out);
while(true){
if((i < len))
{var k__$1 = (ks[i]);
{
var G__3655 = (i + 1);
var G__3656 = replcljs.core.assoc_BANG_.call(null,out__$1,k__$1,(so[k__$1]));
i = G__3655;
out__$1 = G__3656;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,replcljs.core.assoc_BANG_.call(null,out__$1,k,v));
}
break;
}
});
replcljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = {};
var l = ks.length;
var i_3658 = 0;
while(true){
if((i_3658 < l))
{var k_3659 = (ks[i_3658]);
(new_obj[k_3659] = (obj[k_3659]));
{
var G__3660 = (i_3658 + 1);
i_3658 = G__3660;
continue;
}
} else
{}
break;
}
return new_obj;
});
replgoog.provide('replcljs.core.ObjMap');

/**
* @constructor
*/
replcljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
replcljs.core.ObjMap.cljs$lang$type = true;
replcljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ObjMap");
});
replcljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ObjMap");
});
replcljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.transient$.call(null,replcljs.core.into.call(null,replcljs.core.hash_map.call(null),coll));
});
replcljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
replcljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((replcljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return (self__.strobj[k]);
} else
{return not_found;
}
});
replcljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(replgoog.isString(k))
{if((function (){var or__3943__auto__ = (self__.update_count > replcljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (self__.keys.length >= replcljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return replcljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((replcljs.core.scan_array.call(null,1,k,self__.keys) == null)))
{var new_strobj = replcljs.core.obj_clone.call(null,self__.strobj,self__.keys);
(new_strobj[k] = v);
return (new replcljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = replcljs.core.obj_clone.call(null,self__.strobj,self__.keys);
var new_keys = self__.keys.slice();
(new_strobj[k] = v);
new_keys.push(k);
return (new replcljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return replcljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
replcljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((replcljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return true;
} else
{return false;
}
});
replcljs.core.ObjMap.prototype.call = (function() {
var G__3665 = null;
var G__3665__2 = (function (this_sym3663,k){
var self__ = this;
var this_sym3663__$1 = this;
var coll = this_sym3663__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3665__3 = (function (this_sym3664,k,not_found){
var self__ = this;
var this_sym3664__$1 = this;
var coll = this_sym3664__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3665 = function(this_sym3664,k,not_found){
switch(arguments.length){
case 2:
return G__3665__2.call(this,this_sym3664,k);
case 3:
return G__3665__3.call(this,this_sym3664,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3665;
})()
;
replcljs.core.ObjMap.prototype.apply = (function (this_sym3661,args3662){
var self__ = this;
return this_sym3661.call.apply(this_sym3661,[this_sym3661].concat(args3662.slice()));
});
replcljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(replcljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,replcljs.core._nth.call(null,entry,0),replcljs.core._nth.call(null,entry,1));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,coll,entry);
}
});
replcljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.keys.length > 0))
{return replcljs.core.map.call(null,(function (p1__3657_SHARP_){
return replcljs.core.vector.call(null,p1__3657_SHARP_,(self__.strobj[p1__3657_SHARP_]));
}),self__.keys.sort(replcljs.core.obj_map_compare_keys));
} else
{return null;
}
});
replcljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.keys.length;
});
replcljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_map.call(null,coll,other);
});
replcljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
replcljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.ObjMap.EMPTY,self__.meta);
});
replcljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = replgoog.isString(k);
if(and__3941__auto__)
{return !((replcljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{var new_keys = self__.keys.slice();
var new_strobj = replcljs.core.obj_clone.call(null,self__.strobj,self__.keys);
new_keys.splice(replcljs.core.scan_array.call(null,1,k,new_keys),1);
replcljs.core.js_delete.call(null,new_strobj,k);
return (new replcljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll;
}
});
replcljs.core.ObjMap.EMPTY = (new replcljs.core.ObjMap(null,[],{},0,0));
replcljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
replcljs.core.ObjMap.fromObject = (function (ks,obj){
return (new replcljs.core.ObjMap(null,ks,obj,0,null));
});
replgoog.provide('replcljs.core.HashMap');

/**
* @constructor
*/
replcljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
replcljs.core.HashMap.cljs$lang$type = true;
replcljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/HashMap");
});
replcljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/HashMap");
});
replcljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
replcljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var bucket = (self__.hashobj[replcljs.core.hash.call(null,k)]);
var i = (replcljs.core.truth_(bucket)?replcljs.core.scan_array.call(null,2,k,bucket):null);
if(replcljs.core.truth_(i))
{return (bucket[(i + 1)]);
} else
{return not_found;
}
});
replcljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var h = replcljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
if(replcljs.core.truth_(bucket))
{var new_bucket = bucket.slice();
var new_hashobj = replgoog.object.clone(self__.hashobj);
(new_hashobj[h] = new_bucket);
var temp__4090__auto__ = replcljs.core.scan_array.call(null,2,k,new_bucket);
if(replcljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
(new_bucket[(i + 1)] = v);
return (new replcljs.core.HashMap(self__.meta,self__.count,new_hashobj,null));
} else
{new_bucket.push(k,v);
return (new replcljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
} else
{var new_hashobj = replgoog.object.clone(self__.hashobj);
(new_hashobj[h] = [k,v]);
return (new replcljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
});
replcljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var bucket = (self__.hashobj[replcljs.core.hash.call(null,k)]);
var i = (replcljs.core.truth_(bucket)?replcljs.core.scan_array.call(null,2,k,bucket):null);
if(replcljs.core.truth_(i))
{return true;
} else
{return false;
}
});
replcljs.core.HashMap.prototype.call = (function() {
var G__3671 = null;
var G__3671__2 = (function (this_sym3669,k){
var self__ = this;
var this_sym3669__$1 = this;
var coll = this_sym3669__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3671__3 = (function (this_sym3670,k,not_found){
var self__ = this;
var this_sym3670__$1 = this;
var coll = this_sym3670__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3671 = function(this_sym3670,k,not_found){
switch(arguments.length){
case 2:
return G__3671__2.call(this,this_sym3670,k);
case 3:
return G__3671__3.call(this,this_sym3670,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3671;
})()
;
replcljs.core.HashMap.prototype.apply = (function (this_sym3667,args3668){
var self__ = this;
return this_sym3667.call.apply(this_sym3667,[this_sym3667].concat(args3668.slice()));
});
replcljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(replcljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,replcljs.core._nth.call(null,entry,0),replcljs.core._nth.call(null,entry,1));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,coll,entry);
}
});
replcljs.core.HashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.count > 0))
{var hashes = replcljs.core.js_keys.call(null,self__.hashobj).sort();
return replcljs.core.mapcat.call(null,(function (p1__3666_SHARP_){
return replcljs.core.map.call(null,replcljs.core.vec,replcljs.core.partition.call(null,2,(self__.hashobj[p1__3666_SHARP_])));
}),hashes);
} else
{return null;
}
});
replcljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
replcljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_map.call(null,coll,other);
});
replcljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.HashMap(meta__$1,self__.count,self__.hashobj,self__.__hash));
});
replcljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.HashMap.EMPTY,self__.meta);
});
replcljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var h = replcljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
var i = (replcljs.core.truth_(bucket)?replcljs.core.scan_array.call(null,2,k,bucket):null);
if(replcljs.core.not.call(null,i))
{return coll;
} else
{var new_hashobj = replgoog.object.clone(self__.hashobj);
if((3 > bucket.length))
{replcljs.core.js_delete.call(null,new_hashobj,h);
} else
{var new_bucket_3672 = bucket.slice();
new_bucket_3672.splice(i,2);
(new_hashobj[h] = new_bucket_3672);
}
return (new replcljs.core.HashMap(self__.meta,(self__.count - 1),new_hashobj,null));
}
});
replcljs.core.HashMap.EMPTY = (new replcljs.core.HashMap(null,0,{},0));
replcljs.core.HashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = replcljs.core.HashMap.EMPTY;
while(true){
if((i < len))
{{
var G__3673 = (i + 1);
var G__3674 = replcljs.core.assoc.call(null,out,(ks[i]),(vs[i]));
i = G__3673;
out = G__3674;
continue;
}
} else
{return out;
}
break;
}
});
replcljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
var len = arr.length;
var i = 0;
while(true){
if((len <= i))
{return -1;
} else
{if(replcljs.core._EQ_.call(null,(arr[i]),k))
{return i;
} else
{if("\uFDD0'else")
{{
var G__3675 = (i + 2);
i = G__3675;
continue;
}
} else
{return null;
}
}
}
break;
}
});
replgoog.provide('replcljs.core.PersistentArrayMap');

/**
* @constructor
*/
replcljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
replcljs.core.PersistentArrayMap.cljs$lang$type = true;
replcljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentArrayMap");
});
replcljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentArrayMap");
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new replcljs.core.TransientArrayMap({},self__.arr.length,self__.arr.slice()));
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var idx = replcljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var idx = replcljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{if((self__.cnt < replcljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new replcljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),(function (){var G__3678 = self__.arr.slice();
G__3678.push(k);
G__3678.push(v);
return G__3678;
})(),null));
} else
{return replcljs.core.persistent_BANG_.call(null,replcljs.core.assoc_BANG_.call(null,replcljs.core.transient$.call(null,replcljs.core.into.call(null,replcljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new replcljs.core.PersistentArrayMap(self__.meta,self__.cnt,(function (){var G__3679 = self__.arr.slice();
(G__3679[(idx + 1)] = v);
return G__3679;
})(),null));
} else
{return null;
}
}
}
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((replcljs.core.array_map_index_of.call(null,coll,k) === -1));
});
replcljs.core.PersistentArrayMap.prototype.call = (function() {
var G__3682 = null;
var G__3682__2 = (function (this_sym3680,k){
var self__ = this;
var this_sym3680__$1 = this;
var coll = this_sym3680__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3682__3 = (function (this_sym3681,k,not_found){
var self__ = this;
var this_sym3681__$1 = this;
var coll = this_sym3681__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3682 = function(this_sym3681,k,not_found){
switch(arguments.length){
case 2:
return G__3682__2.call(this,this_sym3681,k);
case 3:
return G__3682__3.call(this,this_sym3681,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3682;
})()
;
replcljs.core.PersistentArrayMap.prototype.apply = (function (this_sym3676,args3677){
var self__ = this;
return this_sym3676.call.apply(this_sym3676,[this_sym3676].concat(args3677.slice()));
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)]));
if(replcljs.core.reduced_QMARK_.call(null,init__$2))
{return replcljs.core.deref.call(null,init__$2);
} else
{{
var G__3683 = (i + 2);
var G__3684 = init__$2;
i = G__3683;
init__$1 = G__3684;
continue;
}
}
} else
{return null;
}
break;
}
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(replcljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,replcljs.core._nth.call(null,entry,0),replcljs.core._nth.call(null,entry,1));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,coll,entry);
}
});
replcljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var len = self__.arr.length;
var array_map_seq = (function array_map_seq(i){
return (new replcljs.core.LazySeq(null,false,(function (){
if((i < len))
{return replcljs.core.cons.call(null,replcljs.core.PersistentVector.fromArray([(self__.arr[i]),(self__.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq.call(null,0);
} else
{return null;
}
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_map.call(null,coll,other);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._with_meta.call(null,replcljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var idx = replcljs.core.array_map_index_of.call(null,coll,k);
if((idx >= 0))
{var len = self__.arr.length;
var new_len = (len - 2);
if((new_len === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr = replcljs.core.make_array.call(null,new_len);
var s = 0;
var d = 0;
while(true){
if((s >= len))
{return (new replcljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(replcljs.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__3685 = (s + 2);
var G__3686 = d;
s = G__3685;
d = G__3686;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__3687 = (s + 2);
var G__3688 = (d + 2);
s = G__3687;
d = G__3688;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
replcljs.core.PersistentArrayMap.EMPTY = (new replcljs.core.PersistentArrayMap(null,0,[],null));
replcljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
replcljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len = replcljs.core.count.call(null,ks);
var i = 0;
var out = replcljs.core.transient$.call(null,replcljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len))
{{
var G__3689 = (i + 1);
var G__3690 = replcljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3689;
out = G__3690;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('replcljs.core.TransientArrayMap');

/**
* @constructor
*/
replcljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
replcljs.core.TransientArrayMap.cljs$lang$type = true;
replcljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/TransientArrayMap");
});
replcljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/TransientArrayMap");
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{var idx = replcljs.core.array_map_index_of.call(null,tcoll,key);
if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__3691_3693 = self__.arr;
G__3691_3693.pop();
G__3691_3693.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{var idx = replcljs.core.array_map_index_of.call(null,tcoll,key);
if((idx === -1))
{if(((self__.len + 2) <= (2 * replcljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll;
} else
{return replcljs.core.assoc_BANG_.call(null,replcljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__3692 = o;
if(G__3692)
{if((function (){var or__3943__auto__ = (G__3692.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3692.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3692.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMapEntry,G__3692);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMapEntry,G__3692);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,replcljs.core.key.call(null,o),replcljs.core.val.call(null,o));
} else
{var es = replcljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = replcljs.core.first.call(null,es);
if(replcljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3694 = replcljs.core.next.call(null,es);
var G__3695 = tcoll__$1.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__$1,replcljs.core.key.call(null,e),replcljs.core.val.call(null,e));
es = G__3694;
tcoll__$1 = G__3695;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new replcljs.core.PersistentArrayMap(null,replcljs.core.quot.call(null,self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{var idx = replcljs.core.array_map_index_of.call(null,tcoll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
replcljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
if(replcljs.core.truth_(self__.editable_QMARK_))
{return replcljs.core.quot.call(null,self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
replcljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = replcljs.core.transient$.call(null,replcljs.core.ObjMap.EMPTY);
var i = 0;
while(true){
if((i < len))
{{
var G__3696 = replcljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + 1)]));
var G__3697 = (i + 2);
out = G__3696;
i = G__3697;
continue;
}
} else
{return out;
}
break;
}
});
replgoog.provide('replcljs.core.Box');

/**
* @constructor
*/
replcljs.core.Box = (function (val){
this.val = val;
})
replcljs.core.Box.cljs$lang$type = true;
replcljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1990__auto__){
return replcljs.core.list.call(null,"replcljs.core/Box");
});
replcljs.core.Box.cljs$lang$ctorPrWriter = (function (this__1990__auto__,writer__1991__auto__,opts__1992__auto__){
return replcljs.core._write.call(null,writer__1991__auto__,"replcljs.core/Box");
});
replcljs.core.key_test = (function key_test(key,other){
if(replgoog.isString(key))
{return (key === other);
} else
{return replcljs.core._EQ_.call(null,key,other);
}
});
replcljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
replcljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__3700 = arr.slice();
(G__3700[i] = a);
return G__3700;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__3701 = arr.slice();
(G__3701[i] = a);
(G__3701[j] = b);
return G__3701;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
replcljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = replcljs.core.make_array.call(null,(arr.length - 2));
replcljs.core.array_copy.call(null,arr,0,new_arr,0,(2 * i));
replcljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
replcljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return replcljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
replcljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
replcljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
replcljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);
if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + 1)]));
} else
{var node = (arr[(i + 1)]);
if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();
if(replcljs.core.reduced_QMARK_.call(null,init__$2))
{return replcljs.core.deref.call(null,init__$2);
} else
{{
var G__3702 = (i + 2);
var G__3703 = init__$2;
i = G__3702;
init__$1 = G__3703;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
replgoog.provide('replcljs.core.BitmapIndexedNode');

/**
* @constructor
*/
replcljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
replcljs.core.BitmapIndexedNode.cljs$lang$type = true;
replcljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/BitmapIndexedNode");
});
replcljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/BitmapIndexedNode");
});
replcljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);
replcljs.core.array_copy.call(null,earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
replcljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = replcljs.core.bit_count.call(null,self__.bitmap);
if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;
replcljs.core.array_copy_downward.call(null,earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = replcljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3704 = 0;
var j_3705 = 0;
while(true){
if((i_3704 < 32))
{if((((self__.bitmap >>> i_3704) & 1) === 0))
{{
var G__3706 = (i_3704 + 1);
var G__3707 = j_3705;
i_3704 = G__3706;
j_3705 = G__3707;
continue;
}
} else
{(nodes[i_3704] = ((!(((self__.arr[j_3705]) == null)))?replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),replcljs.core.hash.call(null,(self__.arr[j_3705])),(self__.arr[j_3705]),(self__.arr[(j_3705 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3705 + 1)])));
{
var G__3708 = (i_3704 + 1);
var G__3709 = (j_3705 + 2);
i_3704 = G__3708;
j_3705 = G__3709;
continue;
}
}
} else
{}
break;
}
return (new replcljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if("\uFDD0'else")
{var new_arr = replcljs.core.make_array.call(null,(2 * (n + 4)));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
replcljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return replcljs.core.edit_and_set.call(null,inode,edit__$1,(2 * idx),null,((2 * idx) + 1),replcljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return replcljs.core.create_inode_seq.call(null,self__.arr);
});
replcljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var n = replcljs.core.bit_count.call(null,self__.bitmap);
var new_arr = replcljs.core.make_array.call(null,(((n < 0))?4:(2 * (n + 1))));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * n));
return (new replcljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
replcljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return replcljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
replcljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{return replcljs.core.PersistentVector.fromArray([key_or_nil,val_or_node], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new replcljs.core.BitmapIndexedNode(null,self__.bitmap,replcljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return (new replcljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),replcljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{return (new replcljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),replcljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = replcljs.core.bit_count.call(null,self__.bitmap);
if((n >= 16))
{var nodes = replcljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3710 = 0;
var j_3711 = 0;
while(true){
if((i_3710 < 32))
{if((((self__.bitmap >>> i_3710) & 1) === 0))
{{
var G__3712 = (i_3710 + 1);
var G__3713 = j_3711;
i_3710 = G__3712;
j_3711 = G__3713;
continue;
}
} else
{(nodes[i_3710] = ((!(((self__.arr[j_3711]) == null)))?replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),replcljs.core.hash.call(null,(self__.arr[j_3711])),(self__.arr[j_3711]),(self__.arr[(j_3711 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3711 + 1)])));
{
var G__3714 = (i_3710 + 1);
var G__3715 = (j_3711 + 2);
i_3710 = G__3714;
j_3711 = G__3715;
continue;
}
}
} else
{}
break;
}
return (new replcljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = replcljs.core.make_array.call(null,(2 * (n + 1)));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
replcljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new replcljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return (new replcljs.core.BitmapIndexedNode(null,self__.bitmap,replcljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
}
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new replcljs.core.BitmapIndexedNode(null,self__.bitmap,replcljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new replcljs.core.BitmapIndexedNode(null,self__.bitmap,replcljs.core.clone_and_set.call(null,self__.arr,(2 * idx),null,((2 * idx) + 1),replcljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = replcljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(replcljs.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
replcljs.core.BitmapIndexedNode.EMPTY = (new replcljs.core.BitmapIndexedNode(null,0,replcljs.core.make_array.call(null,0)));
replcljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = (2 * (array_node.cnt - 1));
var new_arr = replcljs.core.make_array.call(null,len);
var i = 0;
var j = 1;
var bitmap = 0;
while(true){
if((i < len))
{if((function (){var and__3941__auto__ = !((i === idx));
if(and__3941__auto__)
{return !(((arr[i]) == null));
} else
{return and__3941__auto__;
}
})())
{(new_arr[j] = (arr[i]));
{
var G__3716 = (i + 1);
var G__3717 = (j + 2);
var G__3718 = (bitmap | (1 << i));
i = G__3716;
j = G__3717;
bitmap = G__3718;
continue;
}
} else
{{
var G__3719 = (i + 1);
var G__3720 = j;
var G__3721 = bitmap;
i = G__3719;
j = G__3720;
bitmap = G__3721;
continue;
}
}
} else
{return (new replcljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});
replgoog.provide('replcljs.core.ArrayNode');

/**
* @constructor
*/
replcljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
replcljs.core.ArrayNode.cljs$lang$type = true;
replcljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ArrayNode");
});
replcljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ArrayNode");
});
replcljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{var editable = replcljs.core.edit_and_set.call(null,inode,edit__$1,idx,replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
replcljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return replcljs.core.create_array_node_seq.call(null,self__.arr);
});
replcljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return replcljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = replcljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if("\uFDD0'else")
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
replcljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{return (new replcljs.core.ArrayNode(e,self__.cnt,self__.arr.slice()));
}
});
replcljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var node = (self__.arr[i]);
if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);
if(replcljs.core.reduced_QMARK_.call(null,init__$2))
{return replcljs.core.deref.call(null,init__$2);
} else
{{
var G__3722 = (i + 1);
var G__3723 = init__$2;
i = G__3722;
init__$1 = G__3723;
continue;
}
}
} else
{return null;
}
} else
{return init__$1;
}
break;
}
});
replcljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
replcljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return replcljs.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new replcljs.core.ArrayNode(null,(self__.cnt - 1),replcljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if("\uFDD0'else")
{return (new replcljs.core.ArrayNode(null,self__.cnt,replcljs.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
replcljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return (new replcljs.core.ArrayNode(null,(self__.cnt + 1),replcljs.core.clone_and_set.call(null,self__.arr,idx,replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return (new replcljs.core.ArrayNode(null,self__.cnt,replcljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
replcljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
replcljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = (2 * cnt);
var i = 0;
while(true){
if((i < lim))
{if(replcljs.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__3724 = (i + 2);
i = G__3724;
continue;
}
}
} else
{return -1;
}
break;
}
});
replgoog.provide('replcljs.core.HashCollisionNode');

/**
* @constructor
*/
replcljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
replcljs.core.HashCollisionNode.cljs$lang$type = true;
replcljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/HashCollisionNode");
});
replcljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/HashCollisionNode");
});
replcljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = replcljs.core.edit_and_set.call(null,inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;
var new_arr = replcljs.core.make_array.call(null,(len + 2));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return replcljs.core.edit_and_set.call(null,inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new replcljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
replcljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return replcljs.core.create_inode_seq.call(null,self__.arr);
});
replcljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
replcljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var new_arr = replcljs.core.make_array.call(null,(2 * (self__.cnt + 1)));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new replcljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
replcljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return replcljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
replcljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(replcljs.core.key_test.call(null,key,(self__.arr[idx])))
{return replcljs.core.PersistentVector.fromArray([(self__.arr[idx]),(self__.arr[(idx + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
replcljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new replcljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),replcljs.core.remove_pair.call(null,self__.arr,replcljs.core.quot.call(null,idx,2))));
} else
{return null;
}
}
}
});
replcljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{var len = self__.arr.length;
var new_arr = replcljs.core.make_array.call(null,(len + 2));
replcljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new replcljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(replcljs.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new replcljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,replcljs.core.clone_and_set.call(null,self__.arr,(idx + 1),val)));
}
}
} else
{return (new replcljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
replcljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = replcljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(replcljs.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
replcljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new replcljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
replcljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = replcljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new replcljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new replcljs.core.Box(false));
return replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = replcljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new replcljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new replcljs.core.Box(false));
return replcljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;
replgoog.provide('replcljs.core.NodeSeq');

/**
* @constructor
*/
replcljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
replcljs.core.NodeSeq.cljs$lang$type = true;
replcljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/NodeSeq");
});
replcljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/NodeSeq");
});
replcljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
replcljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return replcljs.core.PersistentVector.fromArray([(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], true);
} else
{return replcljs.core.first.call(null,self__.s);
}
});
replcljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return replcljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null);
} else
{return replcljs.core.create_inode_seq.call(null,self__.nodes,self__.i,replcljs.core.next.call(null,self__.s));
}
});
replcljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
replcljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replcljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new replcljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4090__auto__ = (nodes[(j + 1)]);
if(replcljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
var temp__4090__auto____$1 = node.inode_seq();
if(replcljs.core.truth_(temp__4090__auto____$1))
{var node_seq = temp__4090__auto____$1;
return (new replcljs.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__3725 = (j + 2);
j = G__3725;
continue;
}
}
} else
{{
var G__3726 = (j + 2);
j = G__3726;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new replcljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;
replgoog.provide('replcljs.core.ArrayNodeSeq');

/**
* @constructor
*/
replcljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
replcljs.core.ArrayNodeSeq.cljs$lang$type = true;
replcljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/ArrayNodeSeq");
});
replcljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/ArrayNodeSeq");
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.first.call(null,self__.s);
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,replcljs.core.next.call(null,self__.s));
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replcljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);
if(replcljs.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;
var temp__4090__auto____$1 = nj.inode_seq();
if(replcljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return (new replcljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__3727 = (j + 1);
j = G__3727;
continue;
}
}
} else
{{
var G__3728 = (j + 1);
j = G__3728;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new replcljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
replgoog.provide('replcljs.core.PersistentHashMap');

/**
* @constructor
*/
replcljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
replcljs.core.PersistentHashMap.cljs$lang$type = true;
replcljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentHashMap");
});
replcljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentHashMap");
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new replcljs.core.TransientHashMap({},self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return self__.root.inode_lookup(0,replcljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((k == null))
{if((function (){var and__3941__auto__ = self__.has_nil_QMARK_;
if(and__3941__auto__)
{return (v === self__.nil_val);
} else
{return and__3941__auto__;
}
})())
{return coll;
} else
{return (new replcljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new replcljs.core.Box(false));
var new_root = (((self__.root == null))?replcljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,replcljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((new_root === self__.root))
{return coll;
} else
{return (new replcljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((self__.root.inode_lookup(0,replcljs.core.hash.call(null,k),k,replcljs.core.lookup_sentinel) === replcljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
replcljs.core.PersistentHashMap.prototype.call = (function() {
var G__3733 = null;
var G__3733__2 = (function (this_sym3731,k){
var self__ = this;
var this_sym3731__$1 = this;
var coll = this_sym3731__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3733__3 = (function (this_sym3732,k,not_found){
var self__ = this;
var this_sym3732__$1 = this;
var coll = this_sym3732__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3733 = function(this_sym3732,k,not_found){
switch(arguments.length){
case 2:
return G__3733__2.call(this,this_sym3732,k);
case 3:
return G__3733__3.call(this,this_sym3732,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3733;
})()
;
replcljs.core.PersistentHashMap.prototype.apply = (function (this_sym3729,args3730){
var self__ = this;
return this_sym3729.call.apply(this_sym3729,[this_sym3729].concat(args3730.slice()));
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);
if(replcljs.core.reduced_QMARK_.call(null,init__$1))
{return replcljs.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if("\uFDD0'else")
{return init__$1;
} else
{return null;
}
}
}
});
replcljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(replcljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,replcljs.core._nth.call(null,entry,0),replcljs.core._nth.call(null,entry,1));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,coll,entry);
}
});
replcljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_)
{return replcljs.core.cons.call(null,replcljs.core.PersistentVector.fromArray([null,self__.nil_val], true),s);
} else
{return s;
}
} else
{return null;
}
});
replcljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_map.call(null,coll,other);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._with_meta.call(null,replcljs.core.PersistentHashMap.EMPTY,self__.meta);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return (new replcljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll;
}
} else
{if((self__.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root = self__.root.inode_without(0,replcljs.core.hash.call(null,k),k);
if((new_root === self__.root))
{return coll;
} else
{return (new replcljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
replcljs.core.PersistentHashMap.EMPTY = (new replcljs.core.PersistentHashMap(null,0,null,false,null,0));
replcljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = replcljs.core.transient$.call(null,replcljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{{
var G__3734 = (i + 1);
var G__3735 = replcljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3734;
out = G__3735;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('replcljs.core.TransientHashMap');

/**
* @constructor
*/
replcljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
replcljs.core.TransientHashMap.cljs$lang$type = true;
replcljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/TransientHashMap");
});
replcljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/TransientHashMap");
});
replcljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
return tcoll.without_BANG_(key);
});
replcljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.assoc_BANG_(key,val);
});
replcljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
return tcoll.conj_BANG_(val);
});
replcljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return tcoll.persistent_BANG_();
});
replcljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,replcljs.core.hash.call(null,k),k);
}
}
});
replcljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,replcljs.core.hash.call(null,k),k,not_found);
}
}
});
replcljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
replcljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((function (){var G__3736 = o;
if(G__3736)
{if((function (){var or__3943__auto__ = (G__3736.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3736.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3736.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMapEntry,G__3736);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMapEntry,G__3736);
}
})())
{return tcoll.assoc_BANG_(replcljs.core.key.call(null,o),replcljs.core.val.call(null,o));
} else
{var es = replcljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = replcljs.core.first.call(null,es);
if(replcljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3737 = replcljs.core.next.call(null,es);
var G__3738 = tcoll__$1.assoc_BANG_(replcljs.core.key.call(null,e),replcljs.core.val.call(null,e));
es = G__3737;
tcoll__$1 = G__3738;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
replcljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new replcljs.core.Box(false));
var node = (((self__.root == null))?replcljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,replcljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
replcljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new replcljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,0,replcljs.core.hash.call(null,k),k,removed_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(replcljs.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
replcljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit)
{self__.edit = null;
return (new replcljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
replcljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null)))
{{
var G__3739 = ((ascending_QMARK_)?t.left:t.right);
var G__3740 = replcljs.core.conj.call(null,stack__$1,t);
t = G__3739;
stack__$1 = G__3740;
continue;
}
} else
{return stack__$1;
}
break;
}
});
replgoog.provide('replcljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
replcljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
replcljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
replcljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentTreeMapSeq");
});
replcljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentTreeMapSeq");
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return replcljs.core.cons.call(null,o,coll);
});
replcljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt < 0))
{return (replcljs.core.count.call(null,replcljs.core.next.call(null,coll)) + 1);
} else
{return self__.cnt;
}
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
return replcljs.core.peek.call(null,self__.stack);
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var t = replcljs.core.first.call(null,self__.stack);
var next_stack = replcljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),replcljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null)))
{return (new replcljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return replcljs.core.List.EMPTY;
}
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
replcljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new replcljs.core.PersistentTreeMapSeq(null,replcljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
replcljs.core.balance_left = (function balance_left(key,val,ins,right){
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins))
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins.left))
{return (new replcljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new replcljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins.right))
{return (new replcljs.core.RedNode(ins.right.key,ins.right.val,(new replcljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new replcljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new replcljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new replcljs.core.BlackNode(key,val,ins,right,null));
}
});
replcljs.core.balance_right = (function balance_right(key,val,left,ins){
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins))
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins.right))
{return (new replcljs.core.RedNode(ins.key,ins.val,(new replcljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,ins.left))
{return (new replcljs.core.RedNode(ins.left.key,ins.left.val,(new replcljs.core.BlackNode(key,val,left,ins.left.left,null)),(new replcljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new replcljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new replcljs.core.BlackNode(key,val,left,ins,null));
}
});
replcljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,del))
{return (new replcljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,right))
{return replcljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto__ = replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,right);
if(and__3941__auto__)
{return replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,right.left);
} else
{return and__3941__auto__;
}
})())
{return (new replcljs.core.RedNode(right.left.key,right.left.val,(new replcljs.core.BlackNode(key,val,del,right.left.left,null)),replcljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
replcljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,del))
{return (new replcljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,left))
{return replcljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto__ = replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,left);
if(and__3941__auto__)
{return replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,left.right);
} else
{return and__3941__auto__;
}
})())
{return (new replcljs.core.RedNode(left.right.key,left.right.val,replcljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new replcljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
replcljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = f.call(null,init,node.key,node.val);
if(replcljs.core.reduced_QMARK_.call(null,init__$1))
{return replcljs.core.deref.call(null,init__$1);
} else
{var init__$2 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__$1):init__$1);
if(replcljs.core.reduced_QMARK_.call(null,init__$2))
{return replcljs.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);
if(replcljs.core.reduced_QMARK_.call(null,init__$3))
{return replcljs.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});
replgoog.provide('replcljs.core.BlackNode');

/**
* @constructor
*/
replcljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
replcljs.core.BlackNode.cljs$lang$type = true;
replcljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/BlackNode");
});
replcljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/BlackNode");
});
replcljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
replcljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
replcljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return replcljs.core.assoc.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
replcljs.core.BlackNode.prototype.call = (function() {
var G__3745 = null;
var G__3745__2 = (function (this_sym3743,k){
var self__ = this;
var this_sym3743__$1 = this;
var node = this_sym3743__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3745__3 = (function (this_sym3744,k,not_found){
var self__ = this;
var this_sym3744__$1 = this;
var node = this_sym3744__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3745 = function(this_sym3744,k,not_found){
switch(arguments.length){
case 2:
return G__3745__2.call(this,this_sym3744,k);
case 3:
return G__3745__3.call(this,this_sym3744,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3745;
})()
;
replcljs.core.BlackNode.prototype.apply = (function (this_sym3741,args3742){
var self__ = this;
return this_sym3741.call.apply(this_sym3741,[this_sym3741].concat(args3742.slice()));
});
replcljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return replcljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
replcljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
replcljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
replcljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});
replcljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
replcljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return replcljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
replcljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new replcljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
replcljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return replcljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
replcljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return replcljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
replcljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});
replcljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new replcljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
replcljs.core.BlackNode.prototype.toString = (function() {
var G__3746 = null;
var G__3746__0 = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
G__3746 = function(){
switch(arguments.length){
case 0:
return G__3746__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3746;
})()
;
replcljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new replcljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
replcljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});
replcljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,node,f);
});
replcljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return replcljs.core.ci_reduce.call(null,node,f,start);
});
replcljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return replcljs.core.list.call(null,self__.key,self__.val);
});
replcljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
replcljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
replcljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return replcljs.core.PersistentVector.fromArray([self__.key], true);
});
replcljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return replcljs.core._assoc_n.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
replcljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
replcljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
replcljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
replcljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
replcljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return replcljs.core.PersistentVector.EMPTY;
});
replgoog.provide('replcljs.core.RedNode');

/**
* @constructor
*/
replcljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
replcljs.core.RedNode.cljs$lang$type = true;
replcljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/RedNode");
});
replcljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/RedNode");
});
replcljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
replcljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
replcljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return replcljs.core.assoc.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
replcljs.core.RedNode.prototype.call = (function() {
var G__3751 = null;
var G__3751__2 = (function (this_sym3749,k){
var self__ = this;
var this_sym3749__$1 = this;
var node = this_sym3749__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3751__3 = (function (this_sym3750,k,not_found){
var self__ = this;
var this_sym3750__$1 = this;
var node = this_sym3750__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3751 = function(this_sym3750,k,not_found){
switch(arguments.length){
case 2:
return G__3751__2.call(this,this_sym3750,k);
case 3:
return G__3751__3.call(this,this_sym3750,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3751;
})()
;
replcljs.core.RedNode.prototype.apply = (function (this_sym3747,args3748){
var self__ = this;
return this_sym3747.call.apply(this_sym3747,[this_sym3747].concat(args3748.slice()));
});
replcljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return replcljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
replcljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
replcljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
replcljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
replcljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});
replcljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
replcljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
replcljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return replcljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
replcljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
replcljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new replcljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
replcljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,self__.left))
{return (new replcljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new replcljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,self__.right))
{return (new replcljs.core.RedNode(self__.right.key,self__.right.val,(new replcljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new replcljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new replcljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
replcljs.core.RedNode.prototype.toString = (function() {
var G__3752 = null;
var G__3752__0 = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
G__3752 = function(){
switch(arguments.length){
case 0:
return G__3752__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3752;
})()
;
replcljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,self__.right))
{return (new replcljs.core.RedNode(self__.key,self__.val,(new replcljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,self__.left))
{return (new replcljs.core.RedNode(self__.left.key,self__.left.val,(new replcljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new replcljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if("\uFDD0'else")
{return (new replcljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
replcljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new replcljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
replcljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,node,f);
});
replcljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return replcljs.core.ci_reduce.call(null,node,f,start);
});
replcljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return replcljs.core.list.call(null,self__.key,self__.val);
});
replcljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
replcljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
replcljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return replcljs.core.PersistentVector.fromArray([self__.key], true);
});
replcljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return replcljs.core._assoc_n.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
replcljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,coll,other);
});
replcljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
replcljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
replcljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
replcljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
replcljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return replcljs.core.PersistentVector.EMPTY;
});
replcljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new replcljs.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
replcljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,left))
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,right))
{var app = tree_map_append.call(null,left.right,right.left);
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,app))
{return (new replcljs.core.RedNode(app.key,app.val,(new replcljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new replcljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new replcljs.core.RedNode(left.key,left.val,left.left,(new replcljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new replcljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,right))
{return (new replcljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app = tree_map_append.call(null,left.right,right.left);
if(replcljs.core.instance_QMARK_.call(null,replcljs.core.RedNode,app))
{return (new replcljs.core.RedNode(app.key,app.val,(new replcljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new replcljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return replcljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new replcljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
replcljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return replcljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,tree.left))
{return replcljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new replcljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(replcljs.core.instance_QMARK_.call(null,replcljs.core.BlackNode,tree.right))
{return replcljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new replcljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
replcljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = comp.call(null,k,tk);
if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
replgoog.provide('replcljs.core.PersistentTreeMap');

/**
* @constructor
*/
replcljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
replcljs.core.PersistentTreeMap.cljs$lang$type = true;
replcljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentTreeMap");
});
replcljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentTreeMap");
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var n = coll.entry_at(k);
if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var found = [null];
var t = replcljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);
if((t == null))
{var found_node = replcljs.core.nth.call(null,found,0);
if(replcljs.core._EQ_.call(null,v,found_node.val))
{return coll;
} else
{return (new replcljs.core.PersistentTreeMap(self__.comp,replcljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new replcljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((coll.entry_at(k) == null));
});
replcljs.core.PersistentTreeMap.prototype.call = (function() {
var G__3757 = null;
var G__3757__2 = (function (this_sym3755,k){
var self__ = this;
var this_sym3755__$1 = this;
var coll = this_sym3755__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3757__3 = (function (this_sym3756,k,not_found){
var self__ = this;
var this_sym3756__$1 = this;
var coll = this_sym3756__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3757 = function(this_sym3756,k,not_found){
switch(arguments.length){
case 2:
return G__3757__2.call(this,this_sym3756,k);
case 3:
return G__3757__3.call(this,this_sym3756,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3757;
})()
;
replcljs.core.PersistentTreeMap.prototype.apply = (function (this_sym3753,args3754){
var self__ = this;
return this_sym3753.call.apply(this_sym3753,[this_sym3753].concat(args3754.slice()));
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
if(!((self__.tree == null)))
{return replcljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(replcljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,replcljs.core._nth.call(null,entry,0),replcljs.core._nth.call(null,entry,1));
} else
{return replcljs.core.reduce.call(null,replcljs.core._conj,coll,entry);
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return replcljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
replcljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__3758 = t.left;
t = G__3758;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__3759 = t.right;
t = G__3759;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{return replcljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{var stack = null;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return (new replcljs.core.PersistentTreeMapSeq(null,replcljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(replcljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__3760 = replcljs.core.conj.call(null,stack,t);
var G__3761 = t.left;
stack = G__3760;
t = G__3761;
continue;
}
} else
{{
var G__3762 = stack;
var G__3763 = t.right;
stack = G__3762;
t = G__3763;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c > 0))
{{
var G__3764 = replcljs.core.conj.call(null,stack,t);
var G__3765 = t.right;
stack = G__3764;
t = G__3765;
continue;
}
} else
{{
var G__3766 = stack;
var G__3767 = t.left;
stack = G__3766;
t = G__3767;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new replcljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return replcljs.core.key.call(null,entry);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return self__.comp;
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return replcljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return replcljs.core.equiv_map.call(null,coll,other);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var found = [null];
var t = replcljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);
if((t == null))
{if((replcljs.core.nth.call(null,found,0) == null))
{return coll;
} else
{return (new replcljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new replcljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
replcljs.core.PersistentTreeMap.EMPTY = (new replcljs.core.PersistentTreeMap(replcljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
replcljs.core.hash_map = (function() {
var hash_map__delegate = function (keyvals){
var in$ = replcljs.core.seq.call(null,keyvals);
var out = replcljs.core.transient$.call(null,replcljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$)
{{
var G__3768 = replcljs.core.nnext.call(null,in$);
var G__3769 = replcljs.core.assoc_BANG_.call(null,out,replcljs.core.first.call(null,in$),replcljs.core.second.call(null,in$));
in$ = G__3768;
out = G__3769;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3770){
var keyvals = replcljs.core.seq(arglist__3770);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
replcljs.core.array_map = (function() {
var array_map__delegate = function (keyvals){
return (new replcljs.core.PersistentArrayMap(null,replcljs.core.quot.call(null,replcljs.core.count.call(null,keyvals),2),replcljs.core.apply.call(null,replcljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__3771){
var keyvals = replcljs.core.seq(arglist__3771);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
replcljs.core.obj_map = (function() {
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = {};
var kvs = replcljs.core.seq.call(null,keyvals);
while(true){
if(kvs)
{ks.push(replcljs.core.first.call(null,kvs));
(obj[replcljs.core.first.call(null,kvs)] = replcljs.core.second.call(null,kvs));
{
var G__3772 = replcljs.core.nnext.call(null,kvs);
kvs = G__3772;
continue;
}
} else
{return replcljs.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__3773){
var keyvals = replcljs.core.seq(arglist__3773);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
replcljs.core.sorted_map = (function() {
var sorted_map__delegate = function (keyvals){
var in$ = replcljs.core.seq.call(null,keyvals);
var out = replcljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$)
{{
var G__3774 = replcljs.core.nnext.call(null,in$);
var G__3775 = replcljs.core.assoc.call(null,out,replcljs.core.first.call(null,in$),replcljs.core.second.call(null,in$));
in$ = G__3774;
out = G__3775;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__3776){
var keyvals = replcljs.core.seq(arglist__3776);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
replcljs.core.sorted_map_by = (function() {
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = replcljs.core.seq.call(null,keyvals);
var out = (new replcljs.core.PersistentTreeMap(replcljs.core.fn__GT_comparator.call(null,comparator),null,0,null,0));
while(true){
if(in$)
{{
var G__3777 = replcljs.core.nnext.call(null,in$);
var G__3778 = replcljs.core.assoc.call(null,out,replcljs.core.first.call(null,in$),replcljs.core.second.call(null,in$));
in$ = G__3777;
out = G__3778;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (replgoog.isDef(var_args)) {
  keyvals = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__3779){
var comparator = replcljs.core.first(arglist__3779);
var keyvals = replcljs.core.rest(arglist__3779);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
replcljs.core.keys = (function keys(hash_map){
return replcljs.core.seq.call(null,replcljs.core.map.call(null,replcljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
replcljs.core.key = (function key(map_entry){
return replcljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
replcljs.core.vals = (function vals(hash_map){
return replcljs.core.seq.call(null,replcljs.core.map.call(null,replcljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
replcljs.core.val = (function val(map_entry){
return replcljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
replcljs.core.merge = (function() {
var merge__delegate = function (maps){
if(replcljs.core.truth_(replcljs.core.some.call(null,replcljs.core.identity,maps)))
{return replcljs.core.reduce.call(null,(function (p1__3780_SHARP_,p2__3781_SHARP_){
return replcljs.core.conj.call(null,(function (){var or__3943__auto__ = p1__3780_SHARP_;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.ObjMap.EMPTY;
}
})(),p2__3781_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3782){
var maps = replcljs.core.seq(arglist__3782);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
replcljs.core.merge_with = (function() {
var merge_with__delegate = function (f,maps){
if(replcljs.core.truth_(replcljs.core.some.call(null,replcljs.core.identity,maps)))
{var merge_entry = (function (m,e){
var k = replcljs.core.first.call(null,e);
var v = replcljs.core.second.call(null,e);
if(replcljs.core.contains_QMARK_.call(null,m,k))
{return replcljs.core.assoc.call(null,m,k,f.call(null,replcljs.core._lookup.call(null,m,k,null),v));
} else
{return replcljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = (function (m1,m2){
return replcljs.core.reduce.call(null,merge_entry,(function (){var or__3943__auto__ = m1;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.ObjMap.EMPTY;
}
})(),replcljs.core.seq.call(null,m2));
});
return replcljs.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3783){
var f = replcljs.core.first(arglist__3783);
var maps = replcljs.core.rest(arglist__3783);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Like merge-with, but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
*
* (deepmerge + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
replcljs.core.deep_merge_with = (function() {
var deep_merge_with__delegate = function (f,maps){
return replcljs.core.apply.call(null,(function() {
var m__delegate = function (maps__$1){
if(replcljs.core.every_QMARK_.call(null,replcljs.core.map_QMARK_,maps__$1))
{return replcljs.core.apply.call(null,replcljs.core.merge_with,m,maps__$1);
} else
{return replcljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;
if (replgoog.isDef(var_args)) {
  maps__$1 = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return m__delegate.call(this, maps__$1);
};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__3784){
var maps__$1 = replcljs.core.seq(arglist__3784);;
return m__delegate(maps__$1);
});
m.cljs$lang$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var deep_merge_with = function (f,var_args){
var maps = null;
if (replgoog.isDef(var_args)) {
  maps = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return deep_merge_with__delegate.call(this, f, maps);
};
deep_merge_with.cljs$lang$maxFixedArity = 1;
deep_merge_with.cljs$lang$applyTo = (function (arglist__3785){
var f = replcljs.core.first(arglist__3785);
var maps = replcljs.core.rest(arglist__3785);
return deep_merge_with__delegate(f, maps);
});
deep_merge_with.cljs$lang$arity$variadic = deep_merge_with__delegate;
return deep_merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
replcljs.core.select_keys = (function select_keys(map,keyseq){
var ret = replcljs.core.ObjMap.EMPTY;
var keys = replcljs.core.seq.call(null,keyseq);
while(true){
if(keys)
{var key = replcljs.core.first.call(null,keys);
var entry = replcljs.core._lookup.call(null,map,key,"\uFDD0'replcljs.core/not-found");
{
var G__3786 = ((replcljs.core.not_EQ_.call(null,entry,"\uFDD0'replcljs.core/not-found"))?replcljs.core.assoc.call(null,ret,key,entry):ret);
var G__3787 = replcljs.core.next.call(null,keys);
ret = G__3786;
keys = G__3787;
continue;
}
} else
{return ret;
}
break;
}
});
replgoog.provide('replcljs.core.PersistentHashSet');

/**
* @constructor
*/
replcljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
replcljs.core.PersistentHashSet.cljs$lang$type = true;
replcljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentHashSet");
});
replcljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentHashSet");
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new replcljs.core.TransientHashSet(replcljs.core.transient$.call(null,self__.hash_map)));
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_iset.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
if(replcljs.core.truth_(replcljs.core._contains_key_QMARK_.call(null,self__.hash_map,v)))
{return v;
} else
{return not_found;
}
});
replcljs.core.PersistentHashSet.prototype.call = (function() {
var G__3793 = null;
var G__3793__2 = (function (this_sym3791,k){
var self__ = this;
var this_sym3791__$1 = this;
var coll = this_sym3791__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3793__3 = (function (this_sym3792,k,not_found){
var self__ = this;
var this_sym3792__$1 = this;
var coll = this_sym3792__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3793 = function(this_sym3792,k,not_found){
switch(arguments.length){
case 2:
return G__3793__2.call(this,this_sym3792,k);
case 3:
return G__3793__3.call(this,this_sym3792,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3793;
})()
;
replcljs.core.PersistentHashSet.prototype.apply = (function (this_sym3789,args3790){
var self__ = this;
return this_sym3789.call.apply(this_sym3789,[this_sym3789].concat(args3790.slice()));
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.PersistentHashSet(self__.meta,replcljs.core.assoc.call(null,self__.hash_map,o,null),null));
});
replcljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.keys.call(null,self__.hash_map);
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new replcljs.core.PersistentHashSet(self__.meta,replcljs.core.dissoc.call(null,self__.hash_map,v),null));
});
replcljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.count.call(null,replcljs.core.seq.call(null,coll));
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = replcljs.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (replcljs.core.count.call(null,coll) === replcljs.core.count.call(null,other));
if(and__3941__auto____$1)
{return replcljs.core.every_QMARK_.call(null,(function (p1__3788_SHARP_){
return replcljs.core.contains_QMARK_.call(null,coll,p1__3788_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentHashSet.EMPTY,self__.meta);
});
replcljs.core.PersistentHashSet.EMPTY = (new replcljs.core.PersistentHashSet(null,replcljs.core.hash_map.call(null),0));
replcljs.core.PersistentHashSet.fromArray = (function (items){
var len = replcljs.core.count.call(null,items);
var i = 0;
var out = replcljs.core.transient$.call(null,replcljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len))
{{
var G__3794 = (i + 1);
var G__3795 = replcljs.core.conj_BANG_.call(null,out,(items[i]));
i = G__3794;
out = G__3795;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
replgoog.provide('replcljs.core.TransientHashSet');

/**
* @constructor
*/
replcljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
replcljs.core.TransientHashSet.cljs$lang$type = true;
replcljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/TransientHashSet");
});
replcljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/TransientHashSet");
});
replcljs.core.TransientHashSet.prototype.call = (function() {
var G__3801 = null;
var G__3801__2 = (function (this_sym3799,k){
var self__ = this;
var this_sym3799__$1 = this;
var tcoll = this_sym3799__$1;
if((replcljs.core._lookup.call(null,self__.transient_map,k,replcljs.core.lookup_sentinel) === replcljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__3801__3 = (function (this_sym3800,k,not_found){
var self__ = this;
var this_sym3800__$1 = this;
var tcoll = this_sym3800__$1;
if((replcljs.core._lookup.call(null,self__.transient_map,k,replcljs.core.lookup_sentinel) === replcljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__3801 = function(this_sym3800,k,not_found){
switch(arguments.length){
case 2:
return G__3801__2.call(this,this_sym3800,k);
case 3:
return G__3801__3.call(this,this_sym3800,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3801;
})()
;
replcljs.core.TransientHashSet.prototype.apply = (function (this_sym3797,args3798){
var self__ = this;
return this_sym3797.call.apply(this_sym3797,[this_sym3797].concat(args3798.slice()));
});
replcljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
replcljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
if((replcljs.core._lookup.call(null,self__.transient_map,v,replcljs.core.lookup_sentinel) === replcljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
replcljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
return replcljs.core.count.call(null,self__.transient_map);
});
replcljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
self__.transient_map = replcljs.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll;
});
replcljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
self__.transient_map = replcljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll;
});
replcljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return (new replcljs.core.PersistentHashSet(null,replcljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});
replgoog.provide('replcljs.core.PersistentTreeSet');

/**
* @constructor
*/
replcljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
replcljs.core.PersistentTreeSet.cljs$lang$type = true;
replcljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/PersistentTreeSet");
});
replcljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/PersistentTreeSet");
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_iset.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
replcljs.core.PersistentTreeSet.prototype.call = (function() {
var G__3806 = null;
var G__3806__2 = (function (this_sym3804,k){
var self__ = this;
var this_sym3804__$1 = this;
var coll = this_sym3804__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3806__3 = (function (this_sym3805,k,not_found){
var self__ = this;
var this_sym3805__$1 = this;
var coll = this_sym3805__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3806 = function(this_sym3805,k,not_found){
switch(arguments.length){
case 2:
return G__3806__2.call(this,this_sym3805,k);
case 3:
return G__3806__3.call(this,this_sym3805,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3806;
})()
;
replcljs.core.PersistentTreeSet.prototype.apply = (function (this_sym3802,args3803){
var self__ = this;
return this_sym3802.call.apply(this_sym3802,[this_sym3802].concat(args3803.slice()));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new replcljs.core.PersistentTreeSet(self__.meta,replcljs.core.assoc.call(null,self__.tree_map,o,null),null));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.map.call(null,replcljs.core.key,replcljs.core.rseq.call(null,self__.tree_map));
});
replcljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
return replcljs.core.map.call(null,replcljs.core.key,replcljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
return replcljs.core.map.call(null,replcljs.core.key,replcljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return entry;
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return replcljs.core._comparator.call(null,self__.tree_map);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.keys.call(null,self__.tree_map);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new replcljs.core.PersistentTreeSet(self__.meta,replcljs.core.dissoc.call(null,self__.tree_map,v),null));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.count.call(null,self__.tree_map);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = replcljs.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (replcljs.core.count.call(null,coll) === replcljs.core.count.call(null,other));
if(and__3941__auto____$1)
{return replcljs.core.every_QMARK_.call(null,(function (p1__3796_SHARP_){
return replcljs.core.contains_QMARK_.call(null,coll,p1__3796_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new replcljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
replcljs.core.PersistentTreeSet.EMPTY = (new replcljs.core.PersistentTreeSet(null,replcljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
replcljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return replcljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() {
var G__3807__delegate = function (keys){
var in$ = replcljs.core.seq.call(null,keys);
var out = replcljs.core.transient$.call(null,replcljs.core.PersistentHashSet.EMPTY);
while(true){
if(replcljs.core.seq.call(null,in$))
{{
var G__3808 = replcljs.core.next.call(null,in$);
var G__3809 = replcljs.core.conj_BANG_.call(null,out,replcljs.core.first.call(null,in$));
in$ = G__3808;
out = G__3809;
continue;
}
} else
{return replcljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var G__3807 = function (var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3807__delegate.call(this, keys);
};
G__3807.cljs$lang$maxFixedArity = 0;
G__3807.cljs$lang$applyTo = (function (arglist__3810){
var keys = replcljs.core.seq(arglist__3810);;
return G__3807__delegate(keys);
});
G__3807.cljs$lang$arity$variadic = G__3807__delegate;
return G__3807;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(replcljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
replcljs.core.set = (function set(coll){
return replcljs.core.apply.call(null,replcljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
replcljs.core.sorted_set = (function() {
var sorted_set__delegate = function (keys){
return replcljs.core.reduce.call(null,replcljs.core._conj,replcljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__3811){
var keys = replcljs.core.seq(arglist__3811);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
replcljs.core.sorted_set_by = (function() {
var sorted_set_by__delegate = function (comparator,keys){
return replcljs.core.reduce.call(null,replcljs.core._conj,(new replcljs.core.PersistentTreeSet(null,replcljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (replgoog.isDef(var_args)) {
  keys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__3813){
var comparator = replcljs.core.first(arglist__3813);
var keys = replcljs.core.rest(arglist__3813);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
replcljs.core.replace = (function replace(smap,coll){
if(replcljs.core.vector_QMARK_.call(null,coll))
{var n = replcljs.core.count.call(null,coll);
return replcljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto__ = replcljs.core.find.call(null,smap,replcljs.core.nth.call(null,v,i));
if(replcljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return replcljs.core.assoc.call(null,v,i,replcljs.core.second.call(null,e));
} else
{return v;
}
}),coll,replcljs.core.take.call(null,n,replcljs.core.iterate.call(null,replcljs.core.inc,0)));
} else
{return replcljs.core.map.call(null,(function (p1__3812_SHARP_){
var temp__4090__auto__ = replcljs.core.find.call(null,smap,p1__3812_SHARP_);
if(replcljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return replcljs.core.second.call(null,e);
} else
{return p1__3812_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
replcljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new replcljs.core.LazySeq(null,false,(function (){
return (function (p__3820,seen__$1){
while(true){
var vec__3821 = p__3820;
var f = replcljs.core.nth.call(null,vec__3821,0,null);
var xs__$1 = vec__3821;
var temp__4092__auto__ = replcljs.core.seq.call(null,xs__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__3822 = replcljs.core.rest.call(null,s);
var G__3823 = seen__$1;
p__3820 = G__3822;
seen__$1 = G__3823;
continue;
}
} else
{return replcljs.core.cons.call(null,f,step.call(null,replcljs.core.rest.call(null,s),replcljs.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step.call(null,coll,replcljs.core.PersistentHashSet.EMPTY);
});
replcljs.core.butlast = (function butlast(s){
var ret = replcljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(replcljs.core.next.call(null,s__$1))
{{
var G__3824 = replcljs.core.conj.call(null,ret,replcljs.core.first.call(null,s__$1));
var G__3825 = replcljs.core.next.call(null,s__$1);
ret = G__3824;
s__$1 = G__3825;
continue;
}
} else
{return replcljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
replcljs.core.name = (function name(x){
if(replcljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(replcljs.core.symbol_QMARK_.call(null,x))
{var x__$1 = [replcljs.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return x__$1;
} else
{return replcljs.core.subs.call(null,x__$1,(i + 1));
}
} else
{if(replcljs.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i < 0))
{return replcljs.core.subs.call(null,x,2);
} else
{return replcljs.core.subs.call(null,x,(i + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("Doesn't support name: "),replcljs.core.str(x)].join('')));
} else
{return null;
}
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
replcljs.core.namespace = (function namespace(x){
if(replcljs.core.symbol_QMARK_.call(null,x))
{var x__$1 = [replcljs.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return null;
} else
{return replcljs.core.subs.call(null,x__$1,0,i);
}
} else
{if(replcljs.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i > -1))
{return replcljs.core.subs.call(null,x,2,i);
} else
{return null;
}
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("Doesn't support namespace: "),replcljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
replcljs.core.zipmap = (function zipmap(keys,vals){
var map = replcljs.core.ObjMap.EMPTY;
var ks = replcljs.core.seq.call(null,keys);
var vs = replcljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto__ = ks;
if(and__3941__auto__)
{return vs;
} else
{return and__3941__auto__;
}
})())
{{
var G__3828 = replcljs.core.assoc.call(null,map,replcljs.core.first.call(null,ks),replcljs.core.first.call(null,vs));
var G__3829 = replcljs.core.next.call(null,ks);
var G__3830 = replcljs.core.next.call(null,vs);
map = G__3828;
ks = G__3829;
vs = G__3830;
continue;
}
} else
{return map;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
replcljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() {
var G__3833__delegate = function (k,x,y,more){
return replcljs.core.reduce.call(null,(function (p1__3826_SHARP_,p2__3827_SHARP_){
return max_key.call(null,k,p1__3826_SHARP_,p2__3827_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3833 = function (k,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3833__delegate.call(this, k, x, y, more);
};
G__3833.cljs$lang$maxFixedArity = 3;
G__3833.cljs$lang$applyTo = (function (arglist__3834){
var k = replcljs.core.first(arglist__3834);
var x = replcljs.core.first(replcljs.core.next(arglist__3834));
var y = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3834)));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3834)));
return G__3833__delegate(k, x, y, more);
});
G__3833.cljs$lang$arity$variadic = G__3833__delegate;
return G__3833;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
replcljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() {
var G__3835__delegate = function (k,x,y,more){
return replcljs.core.reduce.call(null,(function (p1__3831_SHARP_,p2__3832_SHARP_){
return min_key.call(null,k,p1__3831_SHARP_,p2__3832_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3835 = function (k,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3835__delegate.call(this, k, x, y, more);
};
G__3835.cljs$lang$maxFixedArity = 3;
G__3835.cljs$lang$applyTo = (function (arglist__3836){
var k = replcljs.core.first(arglist__3836);
var x = replcljs.core.first(replcljs.core.next(arglist__3836));
var y = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3836)));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3836)));
return G__3835__delegate(k, x, y, more);
});
G__3835.cljs$lang$arity$variadic = G__3835__delegate;
return G__3835;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
replcljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return replcljs.core.cons.call(null,replcljs.core.take.call(null,n,s),partition_all.call(null,n,step,replcljs.core.drop.call(null,step,s)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
replcljs.core.take_while = (function take_while(pred,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(replcljs.core.truth_(pred.call(null,replcljs.core.first.call(null,s))))
{return replcljs.core.cons.call(null,replcljs.core.first.call(null,s),take_while.call(null,pred,replcljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
replcljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = replcljs.core._comparator.call(null,sc);
return test.call(null,comp.call(null,replcljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
replcljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = replcljs.core.mk_bound_fn.call(null,sc,test,key);
if(replcljs.core.truth_(replcljs.core.PersistentHashSet.fromArray([replcljs.core._GT_,replcljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto__ = replcljs.core._sorted_seq_from.call(null,sc,key,true);
if(replcljs.core.truth_(temp__4092__auto__))
{var vec__3839 = temp__4092__auto__;
var e = replcljs.core.nth.call(null,vec__3839,0,null);
var s = vec__3839;
if(replcljs.core.truth_(include.call(null,e)))
{return s;
} else
{return replcljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return replcljs.core.take_while.call(null,include,replcljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = replcljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(replcljs.core.truth_(temp__4092__auto__))
{var vec__3840 = temp__4092__auto__;
var e = replcljs.core.nth.call(null,vec__3840,0,null);
var s = vec__3840;
return replcljs.core.take_while.call(null,replcljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(replcljs.core.truth_(replcljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:replcljs.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
replcljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = replcljs.core.mk_bound_fn.call(null,sc,test,key);
if(replcljs.core.truth_(replcljs.core.PersistentHashSet.fromArray([replcljs.core._LT_,replcljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto__ = replcljs.core._sorted_seq_from.call(null,sc,key,false);
if(replcljs.core.truth_(temp__4092__auto__))
{var vec__3843 = temp__4092__auto__;
var e = replcljs.core.nth.call(null,vec__3843,0,null);
var s = vec__3843;
if(replcljs.core.truth_(include.call(null,e)))
{return s;
} else
{return replcljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return replcljs.core.take_while.call(null,include,replcljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = replcljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(replcljs.core.truth_(temp__4092__auto__))
{var vec__3844 = temp__4092__auto__;
var e = replcljs.core.nth.call(null,vec__3844,0,null);
var s = vec__3844;
return replcljs.core.take_while.call(null,replcljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(replcljs.core.truth_(replcljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:replcljs.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;
replgoog.provide('replcljs.core.Range');

/**
* @constructor
*/
replcljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
replcljs.core.Range.cljs$lang$type = true;
replcljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Range");
});
replcljs.core.Range.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Range");
});
replcljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = replcljs.core.hash_coll.call(null,rng);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
replcljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new replcljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new replcljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
replcljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
return replcljs.core.cons.call(null,o,rng);
});
replcljs.core.Range.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
return replcljs.core.ci_reduce.call(null,rng,f);
});
replcljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var self__ = this;
return replcljs.core.ci_reduce.call(null,rng,f,s);
});
replcljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if((self__.start < self__.end))
{return rng;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng;
} else
{return null;
}
}
});
replcljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
if(replcljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
replcljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
return self__.start;
});
replcljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new replcljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return replcljs.core.List.EMPTY;
}
});
replcljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
return replcljs.core.equiv_sequential.call(null,rng,other);
});
replcljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
return (new replcljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
replcljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
return self__.meta;
});
replcljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
replcljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{return not_found;
}
}
});
replcljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
return replcljs.core.with_meta.call(null,replcljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
replcljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new replcljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
replcljs.core.take_nth = (function take_nth(n,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return replcljs.core.cons.call(null,replcljs.core.first.call(null,s),take_nth.call(null,n,replcljs.core.drop.call(null,n,s)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
replcljs.core.split_with = (function split_with(pred,coll){
return replcljs.core.PersistentVector.fromArray([replcljs.core.take_while.call(null,pred,coll),replcljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
replcljs.core.partition_by = (function partition_by(f,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var fst = replcljs.core.first.call(null,s);
var fv = f.call(null,fst);
var run = replcljs.core.cons.call(null,fst,replcljs.core.take_while.call(null,(function (p1__3845_SHARP_){
return replcljs.core._EQ_.call(null,fv,f.call(null,p1__3845_SHARP_));
}),replcljs.core.next.call(null,s)));
return replcljs.core.cons.call(null,run,partition_by.call(null,f,replcljs.core.seq.call(null,replcljs.core.drop.call(null,replcljs.core.count.call(null,run),s))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
replcljs.core.frequencies = (function frequencies(coll){
return replcljs.core.persistent_BANG_.call(null,replcljs.core.reduce.call(null,(function (counts,x){
return replcljs.core.assoc_BANG_.call(null,counts,x,(replcljs.core._lookup.call(null,counts,x,0) + 1));
}),replcljs.core.transient$.call(null,replcljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
replcljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new replcljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return reductions.call(null,f,replcljs.core.first.call(null,s),replcljs.core.rest.call(null,s));
} else
{return replcljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return replcljs.core.cons.call(null,init,(new replcljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = replcljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return reductions.call(null,f,f.call(null,init,replcljs.core.first.call(null,s)),replcljs.core.rest.call(null,s));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
replcljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__3856 = null;
var G__3856__0 = (function (){
return replcljs.core.vector.call(null,f.call(null));
});
var G__3856__1 = (function (x){
return replcljs.core.vector.call(null,f.call(null,x));
});
var G__3856__2 = (function (x,y){
return replcljs.core.vector.call(null,f.call(null,x,y));
});
var G__3856__3 = (function (x,y,z){
return replcljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3856__4 = (function() {
var G__3857__delegate = function (x,y,z,args){
return replcljs.core.vector.call(null,replcljs.core.apply.call(null,f,x,y,z,args));
};
var G__3857 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3857__delegate.call(this, x, y, z, args);
};
G__3857.cljs$lang$maxFixedArity = 3;
G__3857.cljs$lang$applyTo = (function (arglist__3858){
var x = replcljs.core.first(arglist__3858);
var y = replcljs.core.first(replcljs.core.next(arglist__3858));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3858)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3858)));
return G__3857__delegate(x, y, z, args);
});
G__3857.cljs$lang$arity$variadic = G__3857__delegate;
return G__3857;
})()
;
G__3856 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3856__0.call(this);
case 1:
return G__3856__1.call(this,x);
case 2:
return G__3856__2.call(this,x,y);
case 3:
return G__3856__3.call(this,x,y,z);
default:
return G__3856__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3856.cljs$lang$maxFixedArity = 3;
G__3856.cljs$lang$applyTo = G__3856__4.cljs$lang$applyTo;
return G__3856;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__3859 = null;
var G__3859__0 = (function (){
return replcljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3859__1 = (function (x){
return replcljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3859__2 = (function (x,y){
return replcljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3859__3 = (function (x,y,z){
return replcljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3859__4 = (function() {
var G__3860__delegate = function (x,y,z,args){
return replcljs.core.vector.call(null,replcljs.core.apply.call(null,f,x,y,z,args),replcljs.core.apply.call(null,g,x,y,z,args));
};
var G__3860 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3860__delegate.call(this, x, y, z, args);
};
G__3860.cljs$lang$maxFixedArity = 3;
G__3860.cljs$lang$applyTo = (function (arglist__3861){
var x = replcljs.core.first(arglist__3861);
var y = replcljs.core.first(replcljs.core.next(arglist__3861));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3861)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3861)));
return G__3860__delegate(x, y, z, args);
});
G__3860.cljs$lang$arity$variadic = G__3860__delegate;
return G__3860;
})()
;
G__3859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3859__0.call(this);
case 1:
return G__3859__1.call(this,x);
case 2:
return G__3859__2.call(this,x,y);
case 3:
return G__3859__3.call(this,x,y,z);
default:
return G__3859__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3859.cljs$lang$maxFixedArity = 3;
G__3859.cljs$lang$applyTo = G__3859__4.cljs$lang$applyTo;
return G__3859;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__3862 = null;
var G__3862__0 = (function (){
return replcljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3862__1 = (function (x){
return replcljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3862__2 = (function (x,y){
return replcljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3862__3 = (function (x,y,z){
return replcljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3862__4 = (function() {
var G__3863__delegate = function (x,y,z,args){
return replcljs.core.vector.call(null,replcljs.core.apply.call(null,f,x,y,z,args),replcljs.core.apply.call(null,g,x,y,z,args),replcljs.core.apply.call(null,h,x,y,z,args));
};
var G__3863 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3863__delegate.call(this, x, y, z, args);
};
G__3863.cljs$lang$maxFixedArity = 3;
G__3863.cljs$lang$applyTo = (function (arglist__3864){
var x = replcljs.core.first(arglist__3864);
var y = replcljs.core.first(replcljs.core.next(arglist__3864));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3864)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3864)));
return G__3863__delegate(x, y, z, args);
});
G__3863.cljs$lang$arity$variadic = G__3863__delegate;
return G__3863;
})()
;
G__3862 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3862__0.call(this);
case 1:
return G__3862__1.call(this,x);
case 2:
return G__3862__2.call(this,x,y);
case 3:
return G__3862__3.call(this,x,y,z);
default:
return G__3862__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3862.cljs$lang$maxFixedArity = 3;
G__3862.cljs$lang$applyTo = G__3862__4.cljs$lang$applyTo;
return G__3862;
})()
});
var juxt__4 = (function() {
var G__3865__delegate = function (f,g,h,fs){
var fs__$1 = replcljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__3866 = null;
var G__3866__0 = (function (){
return replcljs.core.reduce.call(null,(function (p1__3846_SHARP_,p2__3847_SHARP_){
return replcljs.core.conj.call(null,p1__3846_SHARP_,p2__3847_SHARP_.call(null));
}),replcljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3866__1 = (function (x){
return replcljs.core.reduce.call(null,(function (p1__3848_SHARP_,p2__3849_SHARP_){
return replcljs.core.conj.call(null,p1__3848_SHARP_,p2__3849_SHARP_.call(null,x));
}),replcljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3866__2 = (function (x,y){
return replcljs.core.reduce.call(null,(function (p1__3850_SHARP_,p2__3851_SHARP_){
return replcljs.core.conj.call(null,p1__3850_SHARP_,p2__3851_SHARP_.call(null,x,y));
}),replcljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3866__3 = (function (x,y,z){
return replcljs.core.reduce.call(null,(function (p1__3852_SHARP_,p2__3853_SHARP_){
return replcljs.core.conj.call(null,p1__3852_SHARP_,p2__3853_SHARP_.call(null,x,y,z));
}),replcljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3866__4 = (function() {
var G__3867__delegate = function (x,y,z,args){
return replcljs.core.reduce.call(null,(function (p1__3854_SHARP_,p2__3855_SHARP_){
return replcljs.core.conj.call(null,p1__3854_SHARP_,replcljs.core.apply.call(null,p2__3855_SHARP_,x,y,z,args));
}),replcljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__3867 = function (x,y,z,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3867__delegate.call(this, x, y, z, args);
};
G__3867.cljs$lang$maxFixedArity = 3;
G__3867.cljs$lang$applyTo = (function (arglist__3868){
var x = replcljs.core.first(arglist__3868);
var y = replcljs.core.first(replcljs.core.next(arglist__3868));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3868)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3868)));
return G__3867__delegate(x, y, z, args);
});
G__3867.cljs$lang$arity$variadic = G__3867__delegate;
return G__3867;
})()
;
G__3866 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3866__0.call(this);
case 1:
return G__3866__1.call(this,x);
case 2:
return G__3866__2.call(this,x,y);
case 3:
return G__3866__3.call(this,x,y,z);
default:
return G__3866__4.cljs$lang$arity$variadic(x,y,z, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3866.cljs$lang$maxFixedArity = 3;
G__3866.cljs$lang$applyTo = G__3866__4.cljs$lang$applyTo;
return G__3866;
})()
};
var G__3865 = function (f,g,h,var_args){
var fs = null;
if (replgoog.isDef(var_args)) {
  fs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__3865__delegate.call(this, f, g, h, fs);
};
G__3865.cljs$lang$maxFixedArity = 3;
G__3865.cljs$lang$applyTo = (function (arglist__3869){
var f = replcljs.core.first(arglist__3869);
var g = replcljs.core.first(replcljs.core.next(arglist__3869));
var h = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3869)));
var fs = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3869)));
return G__3865__delegate(f, g, h, fs);
});
G__3865.cljs$lang$arity$variadic = G__3865__delegate;
return G__3865;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
replcljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(replcljs.core.seq.call(null,coll))
{{
var G__3870 = replcljs.core.next.call(null,coll);
coll = G__3870;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core.seq.call(null,coll);
if(and__3941__auto__)
{return (n > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3871 = (n - 1);
var G__3872 = replcljs.core.next.call(null,coll);
n = G__3871;
coll = G__3872;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
replcljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
replcljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
replcljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
replcljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
replcljs.core.re_matches = (function re_matches(re,s){
var matches = re.exec(s);
if(replcljs.core._EQ_.call(null,replcljs.core.first.call(null,matches),s))
{if((replcljs.core.count.call(null,matches) === 1))
{return replcljs.core.first.call(null,matches);
} else
{return replcljs.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
replcljs.core.re_find = (function re_find(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((replcljs.core.count.call(null,matches) === 1))
{return replcljs.core.first.call(null,matches);
} else
{return replcljs.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
replcljs.core.re_seq = (function re_seq(re,s){
var match_data = replcljs.core.re_find.call(null,re,s);
var match_idx = s.search(re);
var match_str = ((replcljs.core.coll_QMARK_.call(null,match_data))?replcljs.core.first.call(null,match_data):match_data);
var post_match = replcljs.core.subs.call(null,s,(match_idx + replcljs.core.count.call(null,match_str)));
if(replcljs.core.truth_(match_data))
{return (new replcljs.core.LazySeq(null,false,(function (){
return replcljs.core.cons.call(null,match_data,(((replcljs.core.count.call(null,post_match) > 0))?re_seq.call(null,re,post_match):null));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
replcljs.core.re_pattern = (function re_pattern(s){
var vec__3875 = replcljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = replcljs.core.nth.call(null,vec__3875,0,null);
var flags = replcljs.core.nth.call(null,vec__3875,1,null);
var pattern = replcljs.core.nth.call(null,vec__3875,2,null);
return (new RegExp(pattern,flags));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
replcljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray([begin], true),replcljs.core.flatten1.call(null,replcljs.core.interpose.call(null,replcljs.core.PersistentVector.fromArray([sep], true),replcljs.core.map.call(null,(function (p1__3873_SHARP_){
return print_one.call(null,p1__3873_SHARP_,opts);
}),coll))),replcljs.core.PersistentVector.fromArray([end], true));
});
replcljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
replcljs.core._write.call(null,writer,begin);
if(replcljs.core.seq.call(null,coll))
{print_one.call(null,replcljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__3877_3878 = replcljs.core.seq.call(null,replcljs.core.next.call(null,coll));
while(true){
if(G__3877_3878)
{var o_3879 = replcljs.core.first.call(null,G__3877_3878);
replcljs.core._write.call(null,writer,sep);
print_one.call(null,o_3879,writer,opts);
{
var G__3880 = replcljs.core.next.call(null,G__3877_3878);
G__3877_3878 = G__3880;
continue;
}
} else
{}
break;
}
return replcljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
replcljs.core.write_all = (function() {
var write_all__delegate = function (writer,ss){
var G__3882 = replcljs.core.seq.call(null,ss);
while(true){
if(G__3882)
{var s = replcljs.core.first.call(null,G__3882);
replcljs.core._write.call(null,writer,s);
{
var G__3883 = replcljs.core.next.call(null,G__3882);
G__3882 = G__3883;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (replgoog.isDef(var_args)) {
  ss = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__3884){
var writer = replcljs.core.first(arglist__3884);
var ss = replcljs.core.rest(arglist__3884);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
replcljs.core.string_print = (function string_print(x){
replcljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
replcljs.core.flush = (function flush(){
return null;
});
replgoog.provide('replcljs.core.StringBufferWriter');

/**
* @constructor
*/
replcljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
replcljs.core.StringBufferWriter.cljs$lang$type = true;
replcljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/StringBufferWriter");
});
replcljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/StringBufferWriter");
});
replcljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
return self__.sb.append(s);
});
replcljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
return null;
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
replcljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return replcljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return replcljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return replcljs.core.concat.call(null,(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3887 = obj;
if(G__3887)
{if((function (){var or__3943__auto__ = (G__3887.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3887.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3887.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3887);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3887);
}
})();
if(replcljs.core.truth_(and__3941__auto____$1))
{return replcljs.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,replcljs.core.meta.call(null,obj),opts),replcljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__3888 = obj;
if(G__3888)
{if((function (){var or__3943__auto__ = (G__3888.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3888.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3888.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintable,G__3888);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintable,G__3888);
}
})())?replcljs.core._pr_seq.call(null,obj,opts):(replcljs.core.truth_(replcljs.core.regexp_QMARK_.call(null,obj))?replcljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?replcljs.core.list.call(null,"#<",[replcljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
replcljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return replcljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return replcljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3892 = obj;
if(G__3892)
{if((function (){var or__3943__auto__ = (G__3892.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3892.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3892.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3892);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IMeta,G__3892);
}
})();
if(replcljs.core.truth_(and__3941__auto____$1))
{return replcljs.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{replcljs.core._write.call(null,writer,"^");
pr_writer.call(null,replcljs.core.meta.call(null,obj),writer,opts);
replcljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__3893 = obj;
if(G__3893)
{if((function (){var or__3943__auto__ = (G__3893.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3893.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__3893.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintWithWriter,G__3893);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintWithWriter,G__3893);
}
})())
{return replcljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__3894 = obj;
if(G__3894)
{if((function (){var or__3943__auto__ = (G__3894.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3894.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3894.cljs$lang$protocol_mask$partition0$))
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintable,G__3894);
} else
{return false;
}
}
} else
{return replcljs.core.type_satisfies_.call(null,replcljs.core.IPrintable,G__3894);
}
})())
{return replcljs.core.apply.call(null,replcljs.core.write_all,writer,replcljs.core._pr_seq.call(null,obj,opts));
} else
{if(replcljs.core.truth_(replcljs.core.regexp_QMARK_.call(null,obj)))
{return replcljs.core.write_all.call(null,writer,"#\"",obj.source.split("\\/").join("/"),"\"");
} else
{if("\uFDD0'else")
{return replcljs.core.write_all.call(null,writer,"#<",[replcljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
replcljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
replcljs.core.pr_writer.call(null,replcljs.core.first.call(null,objs),writer,opts);
var G__3896 = replcljs.core.seq.call(null,replcljs.core.next.call(null,objs));
while(true){
if(G__3896)
{var obj = replcljs.core.first.call(null,G__3896);
replcljs.core._write.call(null,writer," ");
replcljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__3897 = replcljs.core.next.call(null,G__3896);
G__3896 = G__3897;
continue;
}
} else
{return null;
}
break;
}
});
replcljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new replgoog.string.StringBuffer());
var writer = (new replcljs.core.StringBufferWriter(sb));
replcljs.core.pr_seq_writer.call(null,objs,writer,opts);
replcljs.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
replcljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(replcljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [replcljs.core.str(replcljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
replcljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(replcljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = replcljs.core.pr_sb_with_opts.call(null,objs,opts);
sb.append("\n");
return [replcljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
replcljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return replcljs.core.string_print.call(null,replcljs.core.pr_str_with_opts.call(null,objs,opts));
});
replcljs.core.newline = (function newline(opts){
replcljs.core.string_print.call(null,"\n");
if(replcljs.core.truth_(replcljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return replcljs.core.flush.call(null);
} else
{return null;
}
});
replcljs.core._STAR_flush_on_newline_STAR_ = true;
replcljs.core._STAR_print_readably_STAR_ = true;
replcljs.core._STAR_print_meta_STAR_ = false;
replcljs.core._STAR_print_dup_STAR_ = false;
replcljs.core.pr_opts = (function pr_opts(){
return replcljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":replcljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":replcljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":replcljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":replcljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
replcljs.core.pr_str = (function() {
var pr_str__delegate = function (objs){
return replcljs.core.pr_str_with_opts.call(null,objs,replcljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3898){
var objs = replcljs.core.seq(arglist__3898);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
replcljs.core.prn_str = (function() {
var prn_str__delegate = function (objs){
return replcljs.core.prn_str_with_opts.call(null,objs,replcljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__3899){
var objs = replcljs.core.seq(arglist__3899);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
replcljs.core.pr = (function() {
var pr__delegate = function (objs){
return replcljs.core.pr_with_opts.call(null,objs,replcljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3900){
var objs = replcljs.core.seq(arglist__3900);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
replcljs.core.print = (function() {
var cljs_core_print__delegate = function (objs){
return replcljs.core.pr_with_opts.call(null,objs,replcljs.core.assoc.call(null,replcljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3901){
var objs = replcljs.core.seq(arglist__3901);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
replcljs.core.print_str = (function() {
var print_str__delegate = function (objs){
return replcljs.core.pr_str_with_opts.call(null,objs,replcljs.core.assoc.call(null,replcljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__3902){
var objs = replcljs.core.seq(arglist__3902);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
replcljs.core.println = (function() {
var println__delegate = function (objs){
replcljs.core.pr_with_opts.call(null,objs,replcljs.core.assoc.call(null,replcljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return replcljs.core.newline.call(null,replcljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3903){
var objs = replcljs.core.seq(arglist__3903);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
replcljs.core.println_str = (function() {
var println_str__delegate = function (objs){
return replcljs.core.prn_str_with_opts.call(null,objs,replcljs.core.assoc.call(null,replcljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__3904){
var objs = replcljs.core.seq(arglist__3904);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
replcljs.core.prn = (function() {
var prn__delegate = function (objs){
replcljs.core.pr_with_opts.call(null,objs,replcljs.core.pr_opts.call(null));
return replcljs.core.newline.call(null,replcljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (replgoog.isDef(var_args)) {
  objs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3905){
var objs = replcljs.core.seq(arglist__3905);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
replcljs.core.printf = (function() {
var printf__delegate = function (fmt,args){
return replcljs.core.print.call(null,replcljs.core.apply.call(null,replcljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__3906){
var fmt = replcljs.core.first(arglist__3906);
var args = replcljs.core.rest(arglist__3906);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
replcljs.core.char_escapes = replcljs.core.ObjMap.fromObject(["\"","\\","\b","\f","\n","\r","\t"],{"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"});
replcljs.core.quote_string = (function quote_string(s){
return [replcljs.core.str("\""),replcljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return replcljs.core._lookup.call(null,replcljs.core.char_escapes,match,null);
}))),replcljs.core.str("\"")].join('');
});
replcljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
replcljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
(replcljs.core.IPrintable["number"] = true);
(replcljs.core._pr_seq["number"] = (function (n,opts){
return replcljs.core.list.call(null,[replcljs.core.str(n)].join(''));
}));
replcljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
replcljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"["," ","]",opts,coll);
});
replcljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
replcljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"#queue ["," ","]",opts,replcljs.core.seq.call(null,coll));
});
replcljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(replcljs.core.IPrintable["boolean"] = true);
(replcljs.core._pr_seq["boolean"] = (function (bool,opts){
return replcljs.core.list.call(null,[replcljs.core.str(bool)].join(''));
}));
(replcljs.core.IPrintable["string"] = true);
(replcljs.core._pr_seq["string"] = (function (obj,opts){
if(replcljs.core.keyword_QMARK_.call(null,obj))
{return replcljs.core.list.call(null,[replcljs.core.str(":"),replcljs.core.str((function (){var temp__4092__auto__ = replcljs.core.namespace.call(null,obj);
if(replcljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [replcljs.core.str(nspc),replcljs.core.str("/")].join('');
} else
{return null;
}
})()),replcljs.core.str(replcljs.core.name.call(null,obj))].join(''));
} else
{if(replcljs.core.symbol_QMARK_.call(null,obj))
{return replcljs.core.list.call(null,[replcljs.core.str((function (){var temp__4092__auto__ = replcljs.core.namespace.call(null,obj);
if(replcljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [replcljs.core.str(nspc),replcljs.core.str("/")].join('');
} else
{return null;
}
})()),replcljs.core.str(replcljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return replcljs.core.list.call(null,(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'readably")).call(null,opts))?replcljs.core.quote_string.call(null,obj):obj));
} else
{return null;
}
}
}
}));
replcljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
replcljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"["," ","]",opts,coll);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
replcljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"["," ","]",opts,coll);
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"#{"," ","}",opts,coll);
});
replcljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"["," ","]",opts,coll);
});
replcljs.core.List.prototype.cljs$core$IPrintable$ = true;
replcljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
(replcljs.core.IPrintable["array"] = true);
(replcljs.core._pr_seq["array"] = (function (a,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(replcljs.core.IPrintable["function"] = true);
(replcljs.core._pr_seq["function"] = (function (this$){
return replcljs.core.list.call(null,"#<",[replcljs.core.str(this$)].join(''),">");
}));
replcljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
replcljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.list.call(null,"()");
});
replcljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
replcljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize = (function (n,len){
var ns = [replcljs.core.str(n)].join('');
while(true){
if((replcljs.core.count.call(null,ns) < len))
{{
var G__3907 = [replcljs.core.str("0"),replcljs.core.str(ns)].join('');
ns = G__3907;
continue;
}
} else
{return ns;
}
break;
}
});
return replcljs.core.list.call(null,[replcljs.core.str("#inst \""),replcljs.core.str(d.getUTCFullYear()),replcljs.core.str("-"),replcljs.core.str(normalize.call(null,(d.getUTCMonth() + 1),2)),replcljs.core.str("-"),replcljs.core.str(normalize.call(null,d.getUTCDate(),2)),replcljs.core.str("T"),replcljs.core.str(normalize.call(null,d.getUTCHours(),2)),replcljs.core.str(":"),replcljs.core.str(normalize.call(null,d.getUTCMinutes(),2)),replcljs.core.str(":"),replcljs.core.str(normalize.call(null,d.getUTCSeconds(),2)),replcljs.core.str("."),replcljs.core.str(normalize.call(null,d.getUTCMilliseconds(),3)),replcljs.core.str("-"),replcljs.core.str("00:00\"")].join(''));
});
replcljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
replcljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.Range.prototype.cljs$core$IPrintable$ = true;
replcljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
replcljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return replcljs.core.pr_sequential.call(null,replcljs.core.pr_seq,"("," ",")",opts,coll);
});
replcljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
(replcljs.core.IPrintWithWriter["number"] = true);
(replcljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return replcljs.core._write.call(null,writer,[replcljs.core.str(n)].join(''));
}));
replcljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"["," ","]",opts,coll);
});
replcljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"#queue ["," ","]",opts,replcljs.core.seq.call(null,coll));
});
replcljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(replcljs.core.IPrintWithWriter["boolean"] = true);
(replcljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return replcljs.core._write.call(null,writer,[replcljs.core.str(bool)].join(''));
}));
(replcljs.core.IPrintWithWriter["string"] = true);
(replcljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(replcljs.core.keyword_QMARK_.call(null,obj))
{replcljs.core._write.call(null,writer,":");
var temp__4092__auto___3908 = replcljs.core.namespace.call(null,obj);
if(replcljs.core.truth_(temp__4092__auto___3908))
{var nspc_3909 = temp__4092__auto___3908;
replcljs.core.write_all.call(null,writer,[replcljs.core.str(nspc_3909)].join(''),"/");
} else
{}
return replcljs.core._write.call(null,writer,replcljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return replcljs.core._write.call(null,writer,replcljs.core.quote_string.call(null,obj));
} else
{return replcljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}));
replcljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"["," ","]",opts,coll);
});
replcljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"["," ","]",opts,coll);
});
replcljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"#{"," ","}",opts,coll);
});
replcljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"["," ","]",opts,coll);
});
replcljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
(replcljs.core.IPrintWithWriter["array"] = true);
(replcljs.core._pr_writer["array"] = (function (a,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(replcljs.core.IPrintWithWriter["function"] = true);
(replcljs.core._pr_writer["function"] = (function (this$,writer,_){
return replcljs.core.write_all.call(null,writer,"#<",[replcljs.core.str(this$)].join(''),">");
}));
replcljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core._write.call(null,writer,"()");
});
replcljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize = (function (n,len){
var ns = [replcljs.core.str(n)].join('');
while(true){
if((replcljs.core.count.call(null,ns) < len))
{{
var G__3910 = [replcljs.core.str("0"),replcljs.core.str(ns)].join('');
ns = G__3910;
continue;
}
} else
{return ns;
}
break;
}
});
return replcljs.core.write_all.call(null,writer,"#inst \"",[replcljs.core.str(d.getUTCFullYear())].join(''),"-",normalize.call(null,(d.getUTCMonth() + 1),2),"-",normalize.call(null,d.getUTCDate(),2),"T",normalize.call(null,d.getUTCHours(),2),":",normalize.call(null,d.getUTCMinutes(),2),":",normalize.call(null,d.getUTCSeconds(),2),".",normalize.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
replcljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,""," ","",opts,keyval);
});
return replcljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
replcljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s,writer,_){
var temp__4092__auto___3911 = replcljs.core.namespace.call(null,s);
if(replcljs.core.truth_(temp__4092__auto___3911))
{var nspc_3912 = temp__4092__auto___3911;
replcljs.core.write_all.call(null,writer,[replcljs.core.str(nspc_3912)].join(''),"/");
} else
{}
return replcljs.core._write.call(null,writer,replcljs.core.name.call(null,s));
});
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
replcljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return replcljs.core.pr_sequential_writer.call(null,writer,replcljs.core.pr_writer,"("," ",")",opts,coll);
});
replcljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
replcljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return replcljs.core.compare_indexed.call(null,x,y);
});
replgoog.provide('replcljs.core.Atom');

/**
* @constructor
*/
replcljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
replcljs.core.Atom.cljs$lang$type = true;
replcljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Atom");
});
replcljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Atom");
});
replcljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.getUid(this$);
});
replcljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3913 = replcljs.core.seq.call(null,self__.watches);
while(true){
if(G__3913)
{var vec__3914 = replcljs.core.first.call(null,G__3913);
var key = replcljs.core.nth.call(null,vec__3914,0,null);
var f = replcljs.core.nth.call(null,vec__3914,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__3915 = replcljs.core.next.call(null,G__3913);
G__3913 = G__3915;
continue;
}
} else
{return null;
}
break;
}
});
replcljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = replcljs.core.assoc.call(null,self__.watches,key,f);
});
replcljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = replcljs.core.dissoc.call(null,self__.watches,key);
});
replcljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
replcljs.core._write.call(null,writer,"#<Atom: ");
replcljs.core._pr_writer.call(null,self__.state,writer,opts);
return replcljs.core._write.call(null,writer,">");
});
replcljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return replcljs.core.concat.call(null,replcljs.core.PersistentVector.fromArray(["#<Atom: "], true),replcljs.core._pr_seq.call(null,self__.state,opts),">");
});
replcljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
replcljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.state;
});
replcljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
*
* :meta metadata-map
*
* :validator validate-fn
*
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
replcljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new replcljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() {
var G__3919__delegate = function (x,p__3916){
var map__3918 = p__3916;
var map__3918__$1 = ((replcljs.core.seq_QMARK_.call(null,map__3918))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__3918):map__3918);
var validator = replcljs.core._lookup.call(null,map__3918__$1,"\uFDD0'validator",null);
var meta = replcljs.core._lookup.call(null,map__3918__$1,"\uFDD0'meta",null);
return (new replcljs.core.Atom(x,meta,validator,null));
};
var G__3919 = function (x,var_args){
var p__3916 = null;
if (replgoog.isDef(var_args)) {
  p__3916 = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__3919__delegate.call(this, x, p__3916);
};
G__3919.cljs$lang$maxFixedArity = 1;
G__3919.cljs$lang$applyTo = (function (arglist__3920){
var x = replcljs.core.first(arglist__3920);
var p__3916 = replcljs.core.rest(arglist__3920);
return G__3919__delegate(x, p__3916);
});
G__3919.cljs$lang$arity$variadic = G__3919__delegate;
return G__3919;
})()
;
atom = function(x,var_args){
var p__3916 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, replcljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
replcljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto___3921 = a.validator;
if(replcljs.core.truth_(temp__4092__auto___3921))
{var validate_3922 = temp__4092__auto___3921;
if(replcljs.core.truth_(validate_3922.call(null,new_value)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Validator rejected reference state"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"validate")),(new replcljs.core.Symbol(null,"new-value"))),replcljs.core.hash_map("\uFDD0'line",6788,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value_3923 = a.state;
a.state = new_value;
replcljs.core._notify_watches.call(null,a,old_value_3923,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
replcljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return replcljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return replcljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return replcljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return replcljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() {
var G__3924__delegate = function (a,f,x,y,z,more){
return replcljs.core.reset_BANG_.call(null,a,replcljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3924 = function (a,f,x,y,z,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
}
return G__3924__delegate.call(this, a, f, x, y, z, more);
};
G__3924.cljs$lang$maxFixedArity = 5;
G__3924.cljs$lang$applyTo = (function (arglist__3925){
var a = replcljs.core.first(arglist__3925);
var f = replcljs.core.first(replcljs.core.next(arglist__3925));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3925)));
var y = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3925))));
var z = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3925)))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__3925)))));
return G__3924__delegate(a, f, x, y, z, more);
});
G__3924.cljs$lang$arity$variadic = G__3924__delegate;
return G__3924;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, replcljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
replcljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(replcljs.core._EQ_.call(null,a.state,oldval))
{replcljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
replcljs.core.deref = (function deref(o){
return replcljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
replcljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
replcljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
*
* (apply f its-current-meta args)
*
* f must be free of side-effects
* @param {...*} var_args
*/
replcljs.core.alter_meta_BANG_ = (function() {
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = replcljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3926){
var iref = replcljs.core.first(arglist__3926);
var f = replcljs.core.first(replcljs.core.next(arglist__3926));
var args = replcljs.core.rest(replcljs.core.next(arglist__3926));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
replcljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
*
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
*
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
replcljs.core.add_watch = (function add_watch(iref,key,f){
return replcljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
*
* Removes a watch (set by add-watch) from a reference
*/
replcljs.core.remove_watch = (function remove_watch(iref,key){
return replcljs.core._remove_watch.call(null,iref,key);
});
replcljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
replcljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((replcljs.core.gensym_counter == null))
{replcljs.core.gensym_counter = replcljs.core.atom.call(null,0);
} else
{}
return replcljs.core.symbol.call(null,[replcljs.core.str(prefix_string),replcljs.core.str(replcljs.core.swap_BANG_.call(null,replcljs.core.gensym_counter,replcljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
replcljs.core.fixture1 = 1;
replcljs.core.fixture2 = 2;
replgoog.provide('replcljs.core.Delay');

/**
* @constructor
*/
replcljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
replcljs.core.Delay.cljs$lang$type = true;
replcljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/Delay");
});
replcljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/Delay");
});
replcljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
return (new replcljs.core.Keyword("\uFDD0'done")).call(null,replcljs.core.deref.call(null,self__.state));
});
replcljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return (new replcljs.core.Keyword("\uFDD0'value")).call(null,replcljs.core.swap_BANG_.call(null,self__.state,(function (p__3927){
var map__3928 = p__3927;
var map__3928__$1 = ((replcljs.core.seq_QMARK_.call(null,map__3928))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__3928):map__3928);
var curr_state = map__3928__$1;
var done = replcljs.core._lookup.call(null,map__3928__$1,"\uFDD0'done",null);
if(replcljs.core.truth_(done))
{return curr_state;
} else
{return replcljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":self__.f.call(null)});
}
})));
});
/**
* returns true if x is a Delay created with delay
*/
replcljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return replcljs.core.instance_QMARK_.call(null,replcljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
replcljs.core.force = (function force(x){
if(replcljs.core.delay_QMARK_.call(null,x))
{return replcljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
replcljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return replcljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
replcljs.core.js__GT_clj = (function() {
var js__GT_clj__delegate = function (x,options){
var map__3934 = options;
var map__3934__$1 = ((replcljs.core.seq_QMARK_.call(null,map__3934))?replcljs.core.apply.call(null,replcljs.core.hash_map,map__3934):map__3934);
var keywordize_keys = replcljs.core._lookup.call(null,map__3934__$1,"\uFDD0'keywordize-keys",null);
var keyfn = (replcljs.core.truth_(keywordize_keys)?replcljs.core.keyword:replcljs.core.str);
var f = (function thisfn(x__$1){
if(replcljs.core.seq_QMARK_.call(null,x__$1))
{return replcljs.core.doall.call(null,replcljs.core.map.call(null,thisfn,x__$1));
} else
{if(replcljs.core.coll_QMARK_.call(null,x__$1))
{return replcljs.core.into.call(null,replcljs.core.empty.call(null,x__$1),replcljs.core.map.call(null,thisfn,x__$1));
} else
{if(replcljs.core.truth_(replgoog.isArray(x__$1)))
{return replcljs.core.vec.call(null,replcljs.core.map.call(null,thisfn,x__$1));
} else
{if((replcljs.core.type.call(null,x__$1) === Object))
{return replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,(function (){var iter__2144__auto__ = (function iter__3937(s__3938){
return (new replcljs.core.LazySeq(null,false,(function (){
var s__3938__$1 = s__3938;
while(true){
var temp__4092__auto__ = replcljs.core.seq.call(null,s__3938__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var k = replcljs.core.first.call(null,xs__4579__auto__);
return replcljs.core.cons.call(null,replcljs.core.PersistentVector.fromArray([keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], true),iter__3937.call(null,replcljs.core.rest.call(null,s__3938__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,replcljs.core.js_keys.call(null,x__$1));
})());
} else
{if("\uFDD0'else")
{return x__$1;
} else
{return null;
}
}
}
}
}
});
return f.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (replgoog.isDef(var_args)) {
  options = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3939){
var x = replcljs.core.first(arglist__3939);
var options = replcljs.core.rest(arglist__3939);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
replcljs.core.memoize = (function memoize(f){
var mem = replcljs.core.atom.call(null,replcljs.core.ObjMap.EMPTY);
return (function() {
var G__3940__delegate = function (args){
var temp__4090__auto__ = replcljs.core._lookup.call(null,replcljs.core.deref.call(null,mem),args,null);
if(replcljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;
return v;
} else
{var ret = replcljs.core.apply.call(null,f,args);
replcljs.core.swap_BANG_.call(null,mem,replcljs.core.assoc,args,ret);
return ret;
}
};
var G__3940 = function (var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__3940__delegate.call(this, args);
};
G__3940.cljs$lang$maxFixedArity = 0;
G__3940.cljs$lang$applyTo = (function (arglist__3941){
var args = replcljs.core.seq(arglist__3941);;
return G__3940__delegate(args);
});
G__3940.cljs$lang$arity$variadic = G__3940__delegate;
return G__3940;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
replcljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = f.call(null);
if(replcljs.core.fn_QMARK_.call(null,ret))
{{
var G__3942 = ret;
f = G__3942;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() {
var G__3943__delegate = function (f,args){
return trampoline.call(null,(function (){
return replcljs.core.apply.call(null,f,args);
}));
};
var G__3943 = function (f,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__3943__delegate.call(this, f, args);
};
G__3943.cljs$lang$maxFixedArity = 1;
G__3943.cljs$lang$applyTo = (function (arglist__3944){
var f = replcljs.core.first(arglist__3944);
var args = replcljs.core.rest(arglist__3944);
return G__3943__delegate(f, args);
});
G__3943.cljs$lang$arity$variadic = G__3943__delegate;
return G__3943;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, replcljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
replcljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
replcljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
replcljs.core.rand_nth = (function rand_nth(coll){
return replcljs.core.nth.call(null,coll,replcljs.core.rand_int.call(null,replcljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
replcljs.core.group_by = (function group_by(f,coll){
return replcljs.core.reduce.call(null,(function (ret,x){
var k = f.call(null,x);
return replcljs.core.assoc.call(null,ret,k,replcljs.core.conj.call(null,replcljs.core._lookup.call(null,ret,k,replcljs.core.PersistentVector.EMPTY),x));
}),replcljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
replcljs.core.make_hierarchy = (function make_hierarchy(){
return replcljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":replcljs.core.ObjMap.EMPTY,"\uFDD0'descendants":replcljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":replcljs.core.ObjMap.EMPTY});
});
replcljs.core.global_hierarchy = replcljs.core.atom.call(null,replcljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
replcljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,replcljs.core.deref.call(null,replcljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto__ = replcljs.core._EQ_.call(null,child,parent);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.core.contains_QMARK_.call(null,(new replcljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = replcljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto__)
{var and__3941__auto____$1 = replcljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (replcljs.core.count.call(null,parent) === replcljs.core.count.call(null,child));
if(and__3941__auto____$2)
{var ret = true;
var i = 0;
while(true){
if((function (){var or__3943__auto____$2 = replcljs.core.not.call(null,ret);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (i === replcljs.core.count.call(null,parent));
}
})())
{return ret;
} else
{{
var G__3945 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__3946 = (i + 1);
ret = G__3945;
i = G__3946;
continue;
}
}
break;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
replcljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,replcljs.core.deref.call(null,replcljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return replcljs.core.not_empty.call(null,replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
replcljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,replcljs.core.deref.call(null,replcljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return replcljs.core.not_empty.call(null,replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
replcljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,replcljs.core.deref.call(null,replcljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return replcljs.core.not_empty.call(null,replcljs.core._lookup.call(null,(new replcljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
replcljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(replcljs.core.truth_(replcljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"namespace")),(new replcljs.core.Symbol(null,"parent"))),replcljs.core.hash_map("\uFDD0'line",7072,"\uFDD0'column",12))))].join('')));
}
replcljs.core.swap_BANG_.call(null,replcljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(replcljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"not=")),(new replcljs.core.Symbol(null,"tag")),(new replcljs.core.Symbol(null,"parent"))),replcljs.core.hash_map("\uFDD0'line",7076,"\uFDD0'column",12))))].join('')));
}
var tp = (new replcljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td = (new replcljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta = (new replcljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf = (function (m,source,sources,target,targets){
return replcljs.core.reduce.call(null,(function (ret,k){
return replcljs.core.assoc.call(null,ret,k,replcljs.core.reduce.call(null,replcljs.core.conj,replcljs.core._lookup.call(null,targets,k,replcljs.core.PersistentHashSet.EMPTY),replcljs.core.cons.call(null,target,targets.call(null,target))));
}),m,replcljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto__ = ((replcljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(replcljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error([replcljs.core.str(tag),replcljs.core.str("already has"),replcljs.core.str(parent),replcljs.core.str("as ancestor")].join('')));
} else
{}
if(replcljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error([replcljs.core.str("Cyclic derivation:"),replcljs.core.str(parent),replcljs.core.str("has"),replcljs.core.str(tag),replcljs.core.str("as ancestor")].join('')));
} else
{}
return replcljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":replcljs.core.assoc.call(null,(new replcljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,replcljs.core.conj.call(null,replcljs.core._lookup.call(null,tp,tag,replcljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf.call(null,(new replcljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td,parent,ta),"\uFDD0'descendants":tf.call(null,(new replcljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta,tag,td)});
})());
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
replcljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
replcljs.core.swap_BANG_.call(null,replcljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = (new replcljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents = (replcljs.core.truth_(parentMap.call(null,tag))?replcljs.core.disj.call(null,parentMap.call(null,tag),parent):replcljs.core.PersistentHashSet.EMPTY);
var newParents = (replcljs.core.truth_(replcljs.core.not_empty.call(null,childsParents))?replcljs.core.assoc.call(null,parentMap,tag,childsParents):replcljs.core.dissoc.call(null,parentMap,tag));
var deriv_seq = replcljs.core.flatten.call(null,replcljs.core.map.call(null,(function (p1__3947_SHARP_){
return replcljs.core.cons.call(null,replcljs.core.first.call(null,p1__3947_SHARP_),replcljs.core.interpose.call(null,replcljs.core.first.call(null,p1__3947_SHARP_),replcljs.core.second.call(null,p1__3947_SHARP_)));
}),replcljs.core.seq.call(null,newParents)));
if(replcljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return replcljs.core.reduce.call(null,(function (p1__3948_SHARP_,p2__3949_SHARP_){
return replcljs.core.apply.call(null,replcljs.core.derive,p1__3948_SHARP_,p2__3949_SHARP_);
}),replcljs.core.make_hierarchy.call(null),replcljs.core.partition.call(null,2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
replcljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
replcljs.core.swap_BANG_.call(null,method_cache,(function (_){
return replcljs.core.deref.call(null,method_table);
}));
return replcljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return replcljs.core.deref.call(null,hierarchy);
}));
});
replcljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = replcljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto__ = (replcljs.core.truth_((function (){var and__3941__auto__ = xprefs;
if(replcljs.core.truth_(and__3941__auto__))
{return xprefs.call(null,y);
} else
{return and__3941__auto__;
}
})())?true:null);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var ps = replcljs.core.parents.call(null,y);
while(true){
if((replcljs.core.count.call(null,ps) > 0))
{if(replcljs.core.truth_(prefers_STAR_.call(null,x,replcljs.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__3950 = replcljs.core.rest.call(null,ps);
ps = G__3950;
continue;
}
} else
{return null;
}
break;
}
})();
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){var ps = replcljs.core.parents.call(null,x);
while(true){
if((replcljs.core.count.call(null,ps) > 0))
{if(replcljs.core.truth_(prefers_STAR_.call(null,replcljs.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__3951 = replcljs.core.rest.call(null,ps);
ps = G__3951;
continue;
}
} else
{return null;
}
break;
}
})();
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return false;
}
}
}
});
replcljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto__ = replcljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.isa_QMARK_.call(null,x,y);
}
});
replcljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = replcljs.core.reduce.call(null,(function (be,p__3954){
var vec__3955 = p__3954;
var k = replcljs.core.nth.call(null,vec__3955,0,null);
var _ = replcljs.core.nth.call(null,vec__3955,1,null);
var e = vec__3955;
if(replcljs.core.isa_QMARK_.call(null,dispatch_val,k))
{var be2 = (replcljs.core.truth_((function (){var or__3943__auto__ = (be == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return replcljs.core.dominates.call(null,k,replcljs.core.first.call(null,be),prefer_table);
}
})())?e:be);
if(replcljs.core.truth_(replcljs.core.dominates.call(null,replcljs.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error([replcljs.core.str("Multiple methods in multimethod '"),replcljs.core.str(name),replcljs.core.str("' match dispatch value: "),replcljs.core.str(dispatch_val),replcljs.core.str(" -> "),replcljs.core.str(k),replcljs.core.str(" and "),replcljs.core.str(replcljs.core.first.call(null,be2)),replcljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,replcljs.core.deref.call(null,method_table));
if(replcljs.core.truth_(best_entry))
{if(replcljs.core._EQ_.call(null,replcljs.core.deref.call(null,cached_hierarchy),replcljs.core.deref.call(null,hierarchy)))
{replcljs.core.swap_BANG_.call(null,method_cache,replcljs.core.assoc,dispatch_val,replcljs.core.second.call(null,best_entry));
return replcljs.core.second.call(null,best_entry);
} else
{replcljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
replcljs.core.IMultiFn = {};
replcljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._reset[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._reset["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
replcljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._add_method[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._add_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
replcljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._remove_method[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._remove_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
replcljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._prefer_method[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._prefer_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
replcljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._get_method[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._get_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
replcljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._methods[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._methods["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
replcljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._prefers[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._prefers["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
replcljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (replcljs.core._dispatch[replgoog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (replcljs.core._dispatch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw replcljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
replcljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val = replcljs.core.apply.call(null,dispatch_fn,args);
var target_fn = replcljs.core._get_method.call(null,mf,dispatch_val);
if(replcljs.core.truth_(target_fn))
{} else
{throw (new Error([replcljs.core.str("No method in multimethod '"),replcljs.core.str(replcljs.core.name),replcljs.core.str("' for dispatch value: "),replcljs.core.str(dispatch_val)].join('')));
}
return replcljs.core.apply.call(null,target_fn,args);
});
replgoog.provide('replcljs.core.MultiFn');

/**
* @constructor
*/
replcljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
replcljs.core.MultiFn.cljs$lang$type = true;
replcljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/MultiFn");
});
replcljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/MultiFn");
});
replcljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.getUid(this$);
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
replcljs.core.swap_BANG_.call(null,self__.method_table,(function (mf__$1){
return replcljs.core.ObjMap.EMPTY;
}));
replcljs.core.swap_BANG_.call(null,self__.method_cache,(function (mf__$1){
return replcljs.core.ObjMap.EMPTY;
}));
replcljs.core.swap_BANG_.call(null,self__.prefer_table,(function (mf__$1){
return replcljs.core.ObjMap.EMPTY;
}));
replcljs.core.swap_BANG_.call(null,self__.cached_hierarchy,(function (mf__$1){
return null;
}));
return mf;
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
replcljs.core.swap_BANG_.call(null,self__.method_table,replcljs.core.assoc,dispatch_val,method);
replcljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
replcljs.core.swap_BANG_.call(null,self__.method_table,replcljs.core.dissoc,dispatch_val);
replcljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
if(replcljs.core._EQ_.call(null,replcljs.core.deref.call(null,self__.cached_hierarchy),replcljs.core.deref.call(null,self__.hierarchy)))
{} else
{replcljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = replcljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);
if(replcljs.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;
return target_fn;
} else
{var temp__4090__auto____$1 = replcljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(replcljs.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;
return target_fn;
} else
{return replcljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
if(replcljs.core.truth_(replcljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([replcljs.core.str("Preference conflict in multimethod '"),replcljs.core.str(self__.name),replcljs.core.str("': "),replcljs.core.str(dispatch_val_y),replcljs.core.str(" is already preferred to "),replcljs.core.str(dispatch_val_x)].join('')));
} else
{}
replcljs.core.swap_BANG_.call(null,self__.prefer_table,(function (old){
return replcljs.core.assoc.call(null,old,dispatch_val_x,replcljs.core.conj.call(null,replcljs.core._lookup.call(null,old,dispatch_val_x,replcljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return replcljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
return replcljs.core.deref.call(null,self__.method_table);
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
return replcljs.core.deref.call(null,self__.prefer_table);
});
replcljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var self__ = this;
return replcljs.core.do_dispatch.call(null,mf,self__.dispatch_fn,args);
});
replcljs.core.MultiFn.prototype.call = (function() {
var G__3956__delegate = function (_,args){
var self = this;
return replcljs.core._dispatch.call(null,self,args);
};
var G__3956 = function (_,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return G__3956__delegate.call(this, _, args);
};
G__3956.cljs$lang$maxFixedArity = 1;
G__3956.cljs$lang$applyTo = (function (arglist__3957){
var _ = replcljs.core.first(arglist__3957);
var args = replcljs.core.rest(arglist__3957);
return G__3956__delegate(_, args);
});
G__3956.cljs$lang$arity$variadic = G__3956__delegate;
return G__3956;
})()
;
replcljs.core.MultiFn.prototype.apply = (function (_,args){
var self = this;
return replcljs.core._dispatch.call(null,self,args);
});
/**
* Removes all of the methods of multimethod.
*/
replcljs.core.remove_all_methods = (function remove_all_methods(multifn){
return replcljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
replcljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return replcljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
replcljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return replcljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
replcljs.core.methods$ = (function methods$(multifn){
return replcljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
replcljs.core.get_method = (function get_method(multifn,dispatch_val){
return replcljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
replcljs.core.prefers = (function prefers(multifn){
return replcljs.core._prefers.call(null,multifn);
});
replgoog.provide('replcljs.core.UUID');

/**
* @constructor
*/
replcljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
replcljs.core.UUID.cljs$lang$type = true;
replcljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return replcljs.core.list.call(null,"replcljs.core/UUID");
});
replcljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return replcljs.core._write.call(null,writer__1988__auto__,"replcljs.core/UUID");
});
replcljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return replgoog.string.hashCode(replcljs.core.pr_str.call(null,this$));
});
replcljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
return replcljs.core._write.call(null,writer,[replcljs.core.str("#uuid \""),replcljs.core.str(self__.uuid),replcljs.core.str("\"")].join(''));
});
replcljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_,___$1){
var self__ = this;
return replcljs.core.list.call(null,[replcljs.core.str("#uuid \""),replcljs.core.str(self__.uuid),replcljs.core.str("\"")].join(''));
});
replcljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var and__3941__auto__ = replcljs.core.instance_QMARK_.call(null,replcljs.core.UUID,other);
if(and__3941__auto__)
{return (self__.uuid === other.uuid);
} else
{return and__3941__auto__;
}
});
replcljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return replcljs.core.pr_str.call(null,this$);
});
replcljs.core.destructure = (function destructure(bindings){
var bents = replcljs.core.partition.call(null,2,bindings);
var pb = (function pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = replcljs.core.gensym.call(null,"vec__");
var ret = replcljs.core.conj.call(null,replcljs.core.conj.call(null,bvec__$1,gvec),val);
var n = 0;
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(replcljs.core.seq.call(null,bs))
{var firstb = replcljs.core.first.call(null,bs);
if(replcljs.core._EQ_.call(null,firstb,(new replcljs.core.Symbol(null,"&"))))
{{
var G__3962 = pb.call(null,ret,replcljs.core.second.call(null,bs),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/nthnext")),gvec,n));
var G__3963 = n;
var G__3964 = replcljs.core.nnext.call(null,bs);
var G__3965 = true;
ret = G__3962;
n = G__3963;
bs = G__3964;
seen_rest_QMARK_ = G__3965;
continue;
}
} else
{if(replcljs.core._EQ_.call(null,firstb,"\uFDD0'as"))
{return pb.call(null,ret,replcljs.core.second.call(null,bs),gvec);
} else
{if("\uFDD0'else")
{if(replcljs.core.truth_(seen_rest_QMARK_))
{throw (new replcljs.core.Exception("Unsupported binding form, only :as can follow & parameter"));
} else
{{
var G__3966 = pb.call(null,ret,firstb,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/nth")),gvec,n,null));
var G__3967 = (n + 1);
var G__3968 = replcljs.core.next.call(null,bs);
var G__3969 = seen_rest_QMARK_;
ret = G__3966;
n = G__3967;
bs = G__3968;
seen_rest_QMARK_ = G__3969;
continue;
}
}
} else
{return null;
}
}
}
} else
{return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = replcljs.core.gensym.call(null,"map__");
var defaults = (new replcljs.core.Keyword("\uFDD0'or")).call(null,b__$1);
var ret = (function (ret){
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'as")).call(null,b__$1)))
{return replcljs.core.conj.call(null,ret,(new replcljs.core.Keyword("\uFDD0'as")).call(null,b__$1),gmap);
} else
{return ret;
}
}).call(null,replcljs.core.conj.call(null,replcljs.core.conj.call(null,replcljs.core.conj.call(null,replcljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/seq?"))),replcljs.core.list.call(null,gmap)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/apply"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/hash-map"))),replcljs.core.list.call(null,gmap)))),replcljs.core.list.call(null,gmap)))));
var bes = replcljs.core.reduce.call(null,(function (bes,entry){
return replcljs.core.reduce.call(null,(function (p1__3958_SHARP_,p2__3959_SHARP_){
return replcljs.core.assoc.call(null,p1__3958_SHARP_,p2__3959_SHARP_,replcljs.core.val.call(null,entry).call(null,p2__3959_SHARP_));
}),replcljs.core.dissoc.call(null,bes,replcljs.core.key.call(null,entry)),replcljs.core.key.call(null,entry).call(null,bes));
}),replcljs.core.dissoc.call(null,b__$1,"\uFDD0'as","\uFDD0'or"),replcljs.core.ObjMap.fromObject(["\uFDD0'keys","\uFDD0'strs","\uFDD0'syms"],{"\uFDD0'keys":(function (p1__3960_SHARP_){
return replcljs.core.keyword.call(null,[replcljs.core.str(p1__3960_SHARP_)].join(''));
}),"\uFDD0'strs":replcljs.core.str,"\uFDD0'syms":(function (p1__3961_SHARP_){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),p1__3961_SHARP_);
})}));
while(true){
if(replcljs.core.seq.call(null,bes))
{var bb = replcljs.core.key.call(null,replcljs.core.first.call(null,bes));
var bk = replcljs.core.val.call(null,replcljs.core.first.call(null,bes));
var has_default = replcljs.core.contains_QMARK_.call(null,defaults,bb);
{
var G__3970 = pb.call(null,ret,bb,((has_default)?replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/get")),gmap,bk,defaults.call(null,bb)):replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/get")),gmap,bk)));
var G__3971 = replcljs.core.next.call(null,bes);
ret = G__3970;
bes = G__3971;
continue;
}
} else
{return ret;
}
break;
}
});
if(replcljs.core.symbol_QMARK_.call(null,b))
{return replcljs.core.conj.call(null,replcljs.core.conj.call(null,bvec,b),v);
} else
{if(replcljs.core.vector_QMARK_.call(null,b))
{return pvec.call(null,bvec,b,v);
} else
{if(replcljs.core.map_QMARK_.call(null,b))
{return pmap.call(null,bvec,b,v);
} else
{if("\uFDD0'else")
{throw (new Error([replcljs.core.str("Unsupported binding form: "),replcljs.core.str(b)].join('')));
} else
{return null;
}
}
}
}
});
var process_entry = (function (bvec,b){
return pb.call(null,bvec,replcljs.core.first.call(null,b),replcljs.core.second.call(null,b));
});
if(replcljs.core.every_QMARK_.call(null,replcljs.core.symbol_QMARK_,replcljs.core.map.call(null,replcljs.core.first,bents)))
{return bindings;
} else
{return replcljs.core.reduce.call(null,process_entry,replcljs.core.PersistentVector.EMPTY,bents);
}
});
replcljs.core.namespaces = replcljs.core.atom.call(null,replcljs.core.hash_map((new replcljs.core.Symbol(null,"replcljs.core")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.core"))),(new replcljs.core.Symbol(null,"replcljs.user")),replcljs.core.hash_map("\uFDD0'name",(new replcljs.core.Symbol(null,"replcljs.user")))));
/**
* Returns the namespace named by the symbol or nil if it doesn't
* exist.
*/
replcljs.core.find_ns = (function find_ns(sym){
return replcljs.core.deref.call(null,replcljs.core.namespaces).call(null,sym);
});
/**
* Create a new namespace named by the symbol if one doesn't already
* exist, returns it or the already-existing namespace of the same
* name.
*/
replcljs.core.create_ns = (function create_ns(sym){
var ns = replcljs.core.find_ns.call(null,sym);
if(replcljs.core.truth_(ns))
{return ns;
} else
{replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.assoc_in,replcljs.core.PersistentVector.fromArray([sym,"\uFDD0'name"], true),sym);
return replcljs.core.find_ns.call(null,sym);
}
});
replcljs.core.in_ns = (function in_ns(name){
if(replcljs.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("Unable to resolve namespace name"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"symbol?")),(new replcljs.core.Symbol(null,"name"))),replcljs.core.hash_map("\uFDD0'line",7394,"\uFDD0'column",11))))].join('')));
}
replcljs.analyzer._STAR_cljs_ns_STAR_ = name;
return replcljs.core._STAR_ns_sym_STAR_ = name;
});
/**
* Returns the "var" to which a symbol will be resolved in the
* namespace, else nil.
*/
replcljs.core.ns_resolve = (function ns_resolve(ns,sym){
return replcljs.core.get_in.call(null,ns,replcljs.core.PersistentVector.fromArray(["\uFDD0'defs",sym], true));
});
/**
* same as (ns-resolve (find-ns *ns-sym*) symbol)
*/
replcljs.core.resolve = (function resolve(sym){
return replcljs.core.ns_resolve.call(null,replcljs.core.find_ns.call(null,replcljs.core._STAR_ns_sym_STAR_),sym);
});
replcljs.core.setMacro = (function setMacro(sym){
var ns_3974 = replcljs.core.symbol.call(null,(function (){var or__3943__auto__ = replcljs.core.namespace.call(null,sym);
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = replcljs.core._STAR_ns_sym_STAR_;
if(replcljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){try{return replcljs.analyzer._STAR_cljs_ns_STAR_;
}catch (e3973){if(replcljs.core.instance_QMARK_.call(null,Error,e3973))
{var e = e3973;
return (new replcljs.core.Symbol(null,"replcljs.core"));
} else
{if("\uFDD0'else")
{throw e3973;
} else
{return null;
}
}
}})();
if(replcljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return (new replcljs.core.Symbol(null,"replcljs.core"));
}
}
}
})());
var name_3975 = replcljs.core.symbol.call(null,replcljs.core.name.call(null,sym));
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.assoc_in,replcljs.core.PersistentVector.fromArray([ns_3974,"\uFDD0'defs",name_3975,"\uFDD0'macro?"], true),true);
return null;
});
/**
* @param {...*} var_args
*/
replcljs.core.let$ = (function() {
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"let*")),decl);
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
let$.cljs$lang$maxFixedArity = 2;
let$.cljs$lang$applyTo = (function (arglist__3976){
var _AMPERSAND_form = replcljs.core.first(arglist__3976);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__3976));
var decl = replcljs.core.rest(replcljs.core.next(arglist__3976));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"let")));
/**
* @param {...*} var_args
*/
replcljs.core.loop = (function() {
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"loop*")),decl);
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
loop.cljs$lang$maxFixedArity = 2;
loop.cljs$lang$applyTo = (function (arglist__3977){
var _AMPERSAND_form = replcljs.core.first(arglist__3977);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__3977));
var decl = replcljs.core.rest(replcljs.core.next(arglist__3977));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"loop")));
/**
* @param {...*} var_args
*/
replcljs.core.fn = (function() {
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return replcljs.core.with_meta.call(null,replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"fn*")),decl),replcljs.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (replgoog.isDef(var_args)) {
  decl = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__3978){
var _AMPERSAND_form = replcljs.core.first(arglist__3978);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__3978));
var decl = replcljs.core.rest(replcljs.core.next(arglist__3978));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"fn")));
/**
* Sequentially read and evaluate the set of forms contained in the
* file. Returns a compile-forms* map that contains the emitted
* JavaScript string (:emit-str) and the output (:output).
*/
replcljs.core.load_file_STAR_ = (function load_file_STAR_(name){
var _STAR_ns_sym_STAR_3982 = replcljs.core._STAR_ns_sym_STAR_;
var _STAR_cljs_ns_STAR_3983 = replcljs.analyzer._STAR_cljs_ns_STAR_;
try{replcljs.core._STAR_ns_sym_STAR_ = replcljs.core._STAR_ns_sym_STAR_;
replcljs.analyzer._STAR_cljs_ns_STAR_ = replcljs.analyzer._STAR_cljs_ns_STAR_;
return replcljs.compiler.compile_and_eval_forms.call(null,replcljs.compiler.forms_seq.call(null,name));
}finally {replcljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_3983;
replcljs.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_3982;
}});
/**
* Sequentially read and evaluate the set of forms contained in the
* file.
*/
replcljs.core.load_file = (function load_file(name){
var lf = replcljs.core.load_file_STAR_.call(null,name);
replcljs.core.print.call(null,(new replcljs.core.Keyword("\uFDD0'output")).call(null,lf));
return replcljs.core.dissoc.call(null,lf,"\uFDD0'output","\uFDD0'emit-str");
});
/**
* Returns the root directory path for a lib
*/
replcljs.core.root_resource = (function root_resource(lib){
return [replcljs.core.str("/"),replcljs.core.str(replcljs.core.name.call(null,lib).replace("-","_").replace(".","/"))].join('');
});
replcljs.core.lib__GT_path = (function lib__GT_path(lib){
return [replcljs.core.str("../src/cljs"),replcljs.core.str(replcljs.core.root_resource.call(null,lib)),replcljs.core.str(".cljs")].join('');
});
/**
* @param {...*} var_args
*/
replcljs.core.require = (function() {
var require__delegate = function (libs){
var G__3986 = replcljs.core.seq.call(null,libs);
while(true){
if(G__3986)
{var lib = replcljs.core.first.call(null,G__3986);
if(replcljs.core.truth_(replcljs.core.get_in.call(null,replcljs.core.deref.call(null,replcljs.core.namespaces),replcljs.core.PersistentVector.fromArray([lib,"\uFDD0'defs"], true))))
{} else
{replcljs.core.load_file.call(null,replcljs.core.lib__GT_path.call(null,lib));
}
{
var G__3987 = replcljs.core.next.call(null,G__3986);
G__3986 = G__3987;
continue;
}
} else
{return null;
}
break;
}
};
var require = function (var_args){
var libs = null;
if (replgoog.isDef(var_args)) {
  libs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return require__delegate.call(this, libs);
};
require.cljs$lang$maxFixedArity = 0;
require.cljs$lang$applyTo = (function (arglist__3988){
var libs = replcljs.core.seq(arglist__3988);;
return require__delegate(libs);
});
require.cljs$lang$arity$variadic = require__delegate;
return require;
})()
;
replcljs.core.assert_valid_fdecl = (function assert_valid_fdecl(fdecl){
return null;
});
replcljs.core.sigs = (function sigs(fdecl){
replcljs.core.assert_valid_fdecl.call(null,fdecl);
var asig = (function (fdecl__$1){
var arglist = replcljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((replcljs.core._EQ_.call(null,(new replcljs.core.Symbol(null,"&form")),replcljs.core.first.call(null,arglist)))?replcljs.core.subvec.call(null,arglist,2,replcljs.core.count.call(null,arglist)):arglist);
var body = replcljs.core.next.call(null,fdecl__$1);
if(replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,body)))
{if(replcljs.core.next.call(null,body))
{return replcljs.core.with_meta.call(null,arglist__$1,replcljs.core.conj.call(null,(replcljs.core.truth_(replcljs.core.meta.call(null,arglist__$1))?replcljs.core.meta.call(null,arglist__$1):replcljs.core.ObjMap.EMPTY),replcljs.core.first.call(null,body)));
} else
{return arglist__$1;
}
} else
{return arglist__$1;
}
});
if(replcljs.core.seq_QMARK_.call(null,replcljs.core.first.call(null,fdecl)))
{var ret = replcljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(replcljs.core.truth_(fdecls))
{{
var G__3989 = replcljs.core.conj.call(null,ret,asig.call(null,replcljs.core.first.call(null,fdecls)));
var G__3990 = replcljs.core.next.call(null,fdecls);
ret = G__3989;
fdecls = G__3990;
continue;
}
} else
{return replcljs.core.seq.call(null,ret);
}
break;
}
} else
{return replcljs.core.list.call(null,asig.call(null,fdecl));
}
});
/**
* Same as (def name (fn [params* ] exprs*)) or (def
* name (fn ([params* ] exprs*)+)) with any doc-string or attrs added
* to the var metadata. prepost-map defines a map with optional keys
* :pre and :post that contain collections of pre or post conditions.
* @param {...*} var_args
*/
replcljs.core.defn = (function() {
var defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if(replcljs.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error("First argument to defn must be a symbol"));
}
var m = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,fdecl)))?replcljs.core.ObjMap.fromObject(["\uFDD0'doc"],{"\uFDD0'doc":replcljs.core.first.call(null,fdecl)}):replcljs.core.ObjMap.EMPTY);
var fdecl__$1 = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,fdecl)))?replcljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,fdecl__$1)))?replcljs.core.conj.call(null,m,replcljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,fdecl__$1)))?replcljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((replcljs.core.vector_QMARK_.call(null,replcljs.core.first.call(null,fdecl__$2)))?replcljs.core.list.call(null,fdecl__$2):fdecl__$2);
var m__$2 = ((replcljs.core.map_QMARK_.call(null,replcljs.core.last.call(null,fdecl__$3)))?replcljs.core.conj.call(null,m__$1,replcljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((replcljs.core.map_QMARK_.call(null,replcljs.core.last.call(null,fdecl__$3)))?replcljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = replcljs.core.conj.call(null,replcljs.core.ObjMap.fromObject(["\uFDD0'arglists"],{"\uFDD0'arglists":replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),replcljs.core.sigs.call(null,fdecl__$4))}),m__$2);
var m__$4 = replcljs.core.conj.call(null,(replcljs.core.truth_(replcljs.core.meta.call(null,name))?replcljs.core.meta.call(null,name):replcljs.core.ObjMap.EMPTY),m__$3);
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"def")),replcljs.core.with_meta.call(null,name,m__$4),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"fn")),fdecl__$4));
};
var defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (replgoog.isDef(var_args)) {
  fdecl = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return defn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, fdecl);
};
defn.cljs$lang$maxFixedArity = 3;
defn.cljs$lang$applyTo = (function (arglist__3991){
var _AMPERSAND_form = replcljs.core.first(arglist__3991);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__3991));
var name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__3991)));
var fdecl = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__3991)));
return defn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, fdecl);
});
defn.cljs$lang$arity$variadic = defn__delegate;
return defn;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defn")));
/**
* Like defn, but the resulting function name is declared as a
* macro and will be used as a macro by the compiler when it is
* called.
* @param {...*} var_args
*/
replcljs.core.defmacro = (function() {
var defmacro__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = replcljs.core.list.call(null,name);
var args__$1 = args;
while(true){
var f = replcljs.core.first.call(null,args__$1);
if(replcljs.core.string_QMARK_.call(null,f))
{{
var G__3992 = replcljs.core.cons.call(null,f,p);
var G__3993 = replcljs.core.next.call(null,args__$1);
p = G__3992;
args__$1 = G__3993;
continue;
}
} else
{if(replcljs.core.map_QMARK_.call(null,f))
{{
var G__3994 = replcljs.core.cons.call(null,f,p);
var G__3995 = replcljs.core.next.call(null,args__$1);
p = G__3994;
args__$1 = G__3995;
continue;
}
} else
{return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,fd)))
{{
var G__3996 = replcljs.core.next.call(null,fd);
fd = G__3996;
continue;
}
} else
{if(replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,fd)))
{{
var G__3997 = replcljs.core.next.call(null,fd);
fd = G__3997;
continue;
}
} else
{return fd;
}
}
break;
}
})();
var fdecl__$1 = ((replcljs.core.vector_QMARK_.call(null,replcljs.core.first.call(null,fdecl)))?replcljs.core.list.call(null,fdecl):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = replcljs.core.first.call(null,fd);
return replcljs.core.cons.call(null,replcljs.core.vec.call(null,replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"&form")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"&env")),args__$1))),replcljs.core.next.call(null,fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null))
{return acc;
} else
{var d = replcljs.core.first.call(null,ds);
if(replcljs.core.map_QMARK_.call(null,d))
{return replcljs.core.conj.call(null,acc,d);
} else
{{
var G__3998 = replcljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__3999 = replcljs.core.next.call(null,ds);
acc = G__3998;
ds = G__3999;
continue;
}
}
}
break;
}
});
var fdecl__$2 = replcljs.core.seq.call(null,add_args.call(null,replcljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(replcljs.core.truth_(p))
{{
var G__4000 = replcljs.core.next.call(null,p);
var G__4001 = replcljs.core.cons.call(null,replcljs.core.first.call(null,p),d);
p = G__4000;
d = G__4001;
continue;
}
} else
{return d;
}
break;
}
})();
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do")),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"defn")),decl),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/setMacro")),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),name)));
};
var defmacro = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return defmacro__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
defmacro.cljs$lang$maxFixedArity = 3;
defmacro.cljs$lang$applyTo = (function (arglist__4002){
var _AMPERSAND_form = replcljs.core.first(arglist__4002);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4002));
var name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4002)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4002)));
return defmacro__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
defmacro.cljs$lang$arity$variadic = defmacro__delegate;
return defmacro;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"replcljs.core/defmacro")));
/**
* Evaluates test. If logical true, evaluates body in an implicit do.
* @param {...*} var_args
*/
replcljs.core.when = (function() {
var when__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if")),test,replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"do")),body));
};
var when = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return when__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when.cljs$lang$maxFixedArity = 3;
when.cljs$lang$applyTo = (function (arglist__4003){
var _AMPERSAND_form = replcljs.core.first(arglist__4003);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4003));
var test = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4003)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4003)));
return when__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when.cljs$lang$arity$variadic = when__delegate;
return when;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"when")));
/**
* Evaluates test. If logical false, evaluates body in an implicit do.
* @param {...*} var_args
*/
replcljs.core.when_not = (function() {
var when_not__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if")),test,null,replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"do")),body));
};
var when_not = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return when_not__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when_not.cljs$lang$maxFixedArity = 3;
when_not.cljs$lang$applyTo = (function (arglist__4004){
var _AMPERSAND_form = replcljs.core.first(arglist__4004);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4004));
var test = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4004)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4004)));
return when_not__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when_not.cljs$lang$arity$variadic = when_not__delegate;
return when_not;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"when-not")));
/**
* Takes a set of test/expr pairs. It evaluates each test one at a
* time.  If a test returns logical true, cond evaluates and returns
* the value of the corresponding expr and doesn't evaluate any of the
* other tests or exprs. (cond) returns nil.
* @param {...*} var_args
*/
replcljs.core.cond = (function() {
var cond__delegate = function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(replcljs.core.truth_(clauses))
{return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if")),replcljs.core.first.call(null,clauses),((replcljs.core.next.call(null,clauses))?replcljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"cond")),replcljs.core.next.call(null,replcljs.core.next.call(null,clauses))));
} else
{return null;
}
};
var cond = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return cond__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, clauses);
};
cond.cljs$lang$maxFixedArity = 2;
cond.cljs$lang$applyTo = (function (arglist__4005){
var _AMPERSAND_form = replcljs.core.first(arglist__4005);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4005));
var clauses = replcljs.core.rest(replcljs.core.next(arglist__4005));
return cond__delegate(_AMPERSAND_form, _AMPERSAND_env, clauses);
});
cond.cljs$lang$arity$variadic = cond__delegate;
return cond;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"cond")));
/**
* Evaluates test. If logical false, evaluates and returns then expr,
* otherwise else expr, if supplied, else nil.
*/
replcljs.core.if_not = (function() {
var if_not = null;
var if_not__4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/if-not"))),replcljs.core.list.call(null,test),replcljs.core.list.call(null,then),replcljs.core.list.call(null,null)));
});
var if_not__5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/not"))),replcljs.core.list.call(null,test)))),replcljs.core.list.call(null,then),replcljs.core.list.call(null,else$)));
});
if_not = function(_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
switch(arguments.length){
case 4:
return if_not__4.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then);
case 5:
return if_not__5.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then,else$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_not.cljs$lang$arity$4 = if_not__4;
if_not.cljs$lang$arity$5 = if_not__5;
return if_not;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"if-not")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns logical false (nil or false), and returns that value and
* doesn't evaluate any of the other expressions, otherwise it returns
* the value of the last expr. (and) returns true.
* @param {...*} var_args
*/
replcljs.core.and = (function() {
var and = null;
var and__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});
var and__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var and__4 = (function() {
var G__4008__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"and__4006__auto__"))),replcljs.core.list.call(null,x))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"and__4006__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/and"))),next))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"and__4006__auto__"))))))));
};
var G__4008 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (replgoog.isDef(var_args)) {
  next = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__4008__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__4008.cljs$lang$maxFixedArity = 3;
G__4008.cljs$lang$applyTo = (function (arglist__4009){
var _AMPERSAND_form = replcljs.core.first(arglist__4009);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4009));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4009)));
var next = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4009)));
return G__4008__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__4008.cljs$lang$arity$variadic = G__4008__delegate;
return G__4008;
})()
;
and = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return and__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return and__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return and__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
and.cljs$lang$maxFixedArity = 3;
and.cljs$lang$applyTo = and__4.cljs$lang$applyTo;
and.cljs$lang$arity$2 = and__2;
and.cljs$lang$arity$3 = and__3;
and.cljs$lang$arity$variadic = and__4.cljs$lang$arity$variadic;
return and;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"and")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns a logical true value, or returns that value and doesn't
* evaluate any of the other expressions, otherwise it returns the
* value of the last expression. (or) returns nil.
* @param {...*} var_args
*/
replcljs.core.or = (function() {
var or = null;
var or__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});
var or__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var or__4 = (function() {
var G__4010__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"or__4007__auto__"))),replcljs.core.list.call(null,x))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"or__4007__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"or__4007__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/or"))),next))))))));
};
var G__4010 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (replgoog.isDef(var_args)) {
  next = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return G__4010__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__4010.cljs$lang$maxFixedArity = 3;
G__4010.cljs$lang$applyTo = (function (arglist__4011){
var _AMPERSAND_form = replcljs.core.first(arglist__4011);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4011));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4011)));
var next = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4011)));
return G__4010__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__4010.cljs$lang$arity$variadic = G__4010__delegate;
return G__4010;
})()
;
or = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return or__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return or__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return or__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, replcljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
or.cljs$lang$maxFixedArity = 3;
or.cljs$lang$applyTo = or__4.cljs$lang$applyTo;
or.cljs$lang$arity$2 = or__2;
or.cljs$lang$arity$3 = or__3;
or.cljs$lang$arity$variadic = or__4.cljs$lang$arity$variadic;
return or;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"or")));
/**
* form => fieldName-symbol or (instanceMethodName-symbol args*)
*
* Expands into a member access (.) of the first member on the first
* argument, followed by the next member on the result, etc. For
* instance:
*
* (.. System (getProperties) (get "os.name"))
*
* expands to:
*
* (. (. System (getProperties)) (get "os.name"))
*
* but is easier to write, read, and understand.
* @param {...*} var_args
*/
replcljs.core._DOTDOT_ = (function() {
var _DOTDOT_ = null;
var _DOTDOT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,form)));
});
var _DOTDOT___5 = (function() {
var G__4012__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/.."))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,form)))),more));
};
var G__4012 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__4012__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__4012.cljs$lang$maxFixedArity = 4;
G__4012.cljs$lang$applyTo = (function (arglist__4013){
var _AMPERSAND_form = replcljs.core.first(arglist__4013);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4013));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4013)));
var form = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4013))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4013))));
return G__4012__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__4012.cljs$lang$arity$variadic = G__4012__delegate;
return G__4012;
})()
;
_DOTDOT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return _DOTDOT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return _DOTDOT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_DOTDOT_.cljs$lang$maxFixedArity = 4;
_DOTDOT_.cljs$lang$applyTo = _DOTDOT___5.cljs$lang$applyTo;
_DOTDOT_.cljs$lang$arity$4 = _DOTDOT___4;
_DOTDOT_.cljs$lang$arity$variadic = _DOTDOT___5.cljs$lang$arity$variadic;
return _DOTDOT_;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"..")));
/**
* Threads the expr through the forms. Inserts x as the
* second item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* second item in second form, etc.
* @param {...*} var_args
*/
replcljs.core.__GT_ = (function() {
var __GT_ = null;
var __GT___3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var __GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(replcljs.core.seq_QMARK_.call(null,form))
{return replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.first.call(null,form)),replcljs.core.list.call(null,x),replcljs.core.next.call(null,form))),replcljs.core.meta.call(null,form));
} else
{return replcljs.core.list.call(null,form,x);
}
});
var __GT___5 = (function() {
var G__4014__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/->"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/->"))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,form)))),more));
};
var G__4014 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__4014__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__4014.cljs$lang$maxFixedArity = 4;
G__4014.cljs$lang$applyTo = (function (arglist__4015){
var _AMPERSAND_form = replcljs.core.first(arglist__4015);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4015));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4015)));
var form = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4015))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4015))));
return G__4014__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__4014.cljs$lang$arity$variadic = G__4014__delegate;
return G__4014;
})()
;
__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return __GT___3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return __GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_.cljs$lang$maxFixedArity = 4;
__GT_.cljs$lang$applyTo = __GT___5.cljs$lang$applyTo;
__GT_.cljs$lang$arity$3 = __GT___3;
__GT_.cljs$lang$arity$4 = __GT___4;
__GT_.cljs$lang$arity$variadic = __GT___5.cljs$lang$arity$variadic;
return __GT_;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"->")));
/**
* Threads the expr through the forms. Inserts x as the
* last item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* last item in second form, etc.
* @param {...*} var_args
*/
replcljs.core.__GT__GT_ = (function() {
var __GT__GT_ = null;
var __GT__GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(replcljs.core.seq_QMARK_.call(null,form))
{return replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.first.call(null,form)),replcljs.core.next.call(null,form),replcljs.core.list.call(null,x))),replcljs.core.meta.call(null,form));
} else
{return replcljs.core.list.call(null,form,x);
}
});
var __GT__GT___5 = (function() {
var G__4017__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/->>"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/->>"))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,form)))),more));
};
var G__4017 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__4017__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__4017.cljs$lang$maxFixedArity = 4;
G__4017.cljs$lang$applyTo = (function (arglist__4018){
var _AMPERSAND_form = replcljs.core.first(arglist__4018);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4018));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4018)));
var form = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4018))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4018))));
return G__4017__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__4017.cljs$lang$arity$variadic = G__4017__delegate;
return G__4017;
})()
;
__GT__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return __GT__GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT__GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT__GT_.cljs$lang$maxFixedArity = 4;
__GT__GT_.cljs$lang$applyTo = __GT__GT___5.cljs$lang$applyTo;
__GT__GT_.cljs$lang$arity$4 = __GT__GT___4;
__GT__GT_.cljs$lang$arity$variadic = __GT__GT___5.cljs$lang$arity$variadic;
return __GT__GT_;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"->>")));
/**
* bindings => binding-form test
*
* If test is true, evaluates then with binding-form bound to the value of
* test, if not, yields else
* @param {...*} var_args
*/
replcljs.core.if_let = (function() {
var if_let = null;
var if_let__4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/if-let"))),replcljs.core.list.call(null,bindings),replcljs.core.list.call(null,then),replcljs.core.list.call(null,null)));
});
var if_let__6 = (function() {
var G__4020__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (nil? oldform)"));
}
if("1 or 2 forms after binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4016__auto__"))),replcljs.core.list.call(null,tst))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4016__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,form),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4016__auto__"))))))),replcljs.core.list.call(null,then)))),replcljs.core.list.call(null,else$))))));
};
var G__4020 = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = null;
if (replgoog.isDef(var_args)) {
  oldform = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
}
return G__4020__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
};
G__4020.cljs$lang$maxFixedArity = 5;
G__4020.cljs$lang$applyTo = (function (arglist__4021){
var _AMPERSAND_form = replcljs.core.first(arglist__4021);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4021));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4021)));
var then = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4021))));
var else$ = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4021)))));
var oldform = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4021)))));
return G__4020__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
});
G__4020.cljs$lang$arity$variadic = G__4020__delegate;
return G__4020;
})()
;
if_let = function(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = var_args;
switch(arguments.length){
case 4:
return if_let__4.call(this,_AMPERSAND_form,_AMPERSAND_env,bindings,then);
default:
return if_let__6.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$, replcljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_let.cljs$lang$maxFixedArity = 5;
if_let.cljs$lang$applyTo = if_let__6.cljs$lang$applyTo;
if_let.cljs$lang$arity$4 = if_let__4;
if_let.cljs$lang$arity$variadic = if_let__6.cljs$lang$arity$variadic;
return if_let;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"if-let")));
/**
* bindings => binding-form test
*
* When test is true, evaluates body with binding-form bound to the value of test
* @param {...*} var_args
*/
replcljs.core.when_let = (function() {
var when_let__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4019__auto__"))),replcljs.core.list.call(null,tst))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4019__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,form),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"temp__4019__auto__"))))))),body))))))));
};
var when_let = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return when_let__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_let.cljs$lang$maxFixedArity = 3;
when_let.cljs$lang$applyTo = (function (arglist__4023){
var _AMPERSAND_form = replcljs.core.first(arglist__4023);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4023));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4023)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4023)));
return when_let__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_let.cljs$lang$arity$variadic = when_let__delegate;
return when_let;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"when-let")));
/**
* defs the supplied var names with no bindings, useful for making forward declarations.
* @param {...*} var_args
*/
replcljs.core.declare = (function() {
var declare__delegate = function (_AMPERSAND_form,_AMPERSAND_env,names){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.map.call(null,(function (p1__4022_SHARP_){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"def")),replcljs.core.vary_meta.call(null,p1__4022_SHARP_,replcljs.core.assoc,"\uFDD0'declared",true));
}),names)));
};
var declare = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var names = null;
if (replgoog.isDef(var_args)) {
  names = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return declare__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, names);
};
declare.cljs$lang$maxFixedArity = 2;
declare.cljs$lang$applyTo = (function (arglist__4024){
var _AMPERSAND_form = replcljs.core.first(arglist__4024);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4024));
var names = replcljs.core.rest(replcljs.core.next(arglist__4024));
return declare__delegate(_AMPERSAND_form, _AMPERSAND_env, names);
});
declare.cljs$lang$arity$variadic = declare__delegate;
return declare;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"declare")));
/**
* Evaluates x then calls all of the methods and functions with the
* value of x supplied at the front of the given arguments.  The forms
* are evaluated in order.  Returns x.
*
* (doto (new js/Array) (.push "a") (.push "b"))
* @param {...*} var_args
*/
replcljs.core.doto = (function() {
var doto__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = replcljs.core.gensym.call(null);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,gx),replcljs.core.list.call(null,x))))),replcljs.core.map.call(null,(function (f){
if(replcljs.core.seq_QMARK_.call(null,f))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.first.call(null,f)),replcljs.core.list.call(null,gx),replcljs.core.next.call(null,f)));
} else
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,f),replcljs.core.list.call(null,gx)));
}
}),forms),replcljs.core.list.call(null,gx)));
};
var doto = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var forms = null;
if (replgoog.isDef(var_args)) {
  forms = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return doto__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, forms);
};
doto.cljs$lang$maxFixedArity = 3;
doto.cljs$lang$applyTo = (function (arglist__4025){
var _AMPERSAND_form = replcljs.core.first(arglist__4025);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4025));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4025)));
var forms = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4025)));
return doto__delegate(_AMPERSAND_form, _AMPERSAND_env, x, forms);
});
doto.cljs$lang$arity$variadic = doto__delegate;
return doto;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"doto")));
/**
* Expands into code that creates a fn that expects to be passed an
* object and any args and calls the named instance method on the
* object passing the args. Use when you want to treat a Java method as
* a first-class fn. name may be type-hinted with the method receiver's
* type in order to avoid reflective calls.
* @param {...*} var_args
*/
replcljs.core.memfn = (function() {
var memfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = replcljs.core.with_meta.call(null,replcljs.core.gensym.call(null,"target"),replcljs.core.meta.call(null,name));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,t),args)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,t),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,name),args))))))));
};
var memfn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (replgoog.isDef(var_args)) {
  args = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return memfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
memfn.cljs$lang$maxFixedArity = 3;
memfn.cljs$lang$applyTo = (function (arglist__4026){
var _AMPERSAND_form = replcljs.core.first(arglist__4026);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4026));
var name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4026)));
var args = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4026)));
return memfn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
memfn.cljs$lang$arity$variadic = memfn__delegate;
return memfn;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"memfn")));
replcljs.core.maybe_destructured = (function maybe_destructured(params,body){
if(replcljs.core.every_QMARK_.call(null,replcljs.core.symbol_QMARK_,params))
{return replcljs.core.cons.call(null,params,body);
} else
{var params__$1 = params;
var new_params = replcljs.core.PersistentVector.EMPTY;
var lets = replcljs.core.PersistentVector.EMPTY;
while(true){
if(replcljs.core.truth_(params__$1))
{if(replcljs.core.symbol_QMARK_.call(null,replcljs.core.first.call(null,params__$1)))
{{
var G__4027 = replcljs.core.next.call(null,params__$1);
var G__4028 = replcljs.core.conj.call(null,new_params,replcljs.core.first.call(null,params__$1));
var G__4029 = lets;
params__$1 = G__4027;
new_params = G__4028;
lets = G__4029;
continue;
}
} else
{var gparam = replcljs.core.gensym.call(null,"p__");
{
var G__4030 = replcljs.core.next.call(null,params__$1);
var G__4031 = replcljs.core.conj.call(null,new_params,gparam);
var G__4032 = replcljs.core.conj.call(null,replcljs.core.conj.call(null,lets,replcljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__4030;
new_params = G__4031;
lets = G__4032;
continue;
}
}
} else
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,new_params),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,lets),body)))));
}
break;
}
}
});
/**
* params => positional-params* , or positional-params* & next-param
* positional-param => binding-form
* next-param => binding-form
* name => symbol
*
* Defines a function
* @param {...*} var_args
*/
replcljs.core.fn = (function() {
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = ((replcljs.core.symbol_QMARK_.call(null,replcljs.core.first.call(null,sigs)))?replcljs.core.first.call(null,sigs):null);
var sigs__$1 = (replcljs.core.truth_(name)?replcljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((replcljs.core.vector_QMARK_.call(null,replcljs.core.first.call(null,sigs__$1)))?replcljs.core.list.call(null,sigs__$1):((replcljs.core.seq_QMARK_.call(null,replcljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((replcljs.core.seq.call(null,sigs__$1))?[replcljs.core.str("Parameter declaration "),replcljs.core.str(replcljs.core.first.call(null,sigs__$1)),replcljs.core.str(" should be a vector")].join(''):[replcljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = (function (sig){
if(!(replcljs.core.seq_QMARK_.call(null,sig)))
{throw (new Error([replcljs.core.str("Invalid signature "),replcljs.core.str(sig),replcljs.core.str(" should be a list")].join('')));
} else
{}
var vec__4035 = sig;
var params = replcljs.core.nth.call(null,vec__4035,0,null);
var body = replcljs.core.nthnext.call(null,vec__4035,1);
var _ = ((!(replcljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((replcljs.core.seq_QMARK_.call(null,replcljs.core.first.call(null,sigs__$2)))?[replcljs.core.str("Parameter declaration "),replcljs.core.str(params),replcljs.core.str(" should be a vector")].join(''):[replcljs.core.str("Invalid signature "),replcljs.core.str(sig),replcljs.core.str(" should be a list")].join(''))))})():null);
var conds = (replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.core.next.call(null,body);
if(and__3941__auto__)
{return replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,body));
} else
{return and__3941__auto__;
}
})())?replcljs.core.first.call(null,body):null);
var body__$1 = (replcljs.core.truth_(conds)?replcljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__3943__auto__ = conds;
if(replcljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return replcljs.core.meta.call(null,params);
}
})();
var pre = (new replcljs.core.Keyword("\uFDD0'pre")).call(null,conds__$1);
var post = (new replcljs.core.Keyword("\uFDD0'post")).call(null,conds__$1);
var body__$2 = (replcljs.core.truth_(post)?replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"%"))),replcljs.core.list.call(null,(((1 < replcljs.core.count.call(null,body__$1)))?replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),body__$1)):replcljs.core.first.call(null,body__$1))))))),replcljs.core.map.call(null,(function (c){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/assert"))),replcljs.core.list.call(null,c)));
}),post),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"%")))))))):body__$1);
var body__$3 = (replcljs.core.truth_(pre)?replcljs.core.concat.call(null,replcljs.core.map.call(null,(function (c){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/assert"))),replcljs.core.list.call(null,c)));
}),pre),body__$2):body__$2);
return replcljs.core.maybe_destructured.call(null,params,body__$3);
});
var new_sigs = replcljs.core.map.call(null,psig,sigs__$2);
return replcljs.core.with_meta.call(null,(replcljs.core.truth_(name)?replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,"fn*")),name,new_sigs):replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"fn*")),new_sigs)),replcljs.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var sigs = null;
if (replgoog.isDef(var_args)) {
  sigs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, sigs);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__4036){
var _AMPERSAND_form = replcljs.core.first(arglist__4036);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4036));
var sigs = replcljs.core.rest(replcljs.core.next(arglist__4036));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, sigs);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"fn")));
/**
* bindings => x xs
*
* Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
* @param {...*} var_args
*/
replcljs.core.when_first = (function() {
var when_first__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var vec__4038 = bindings;
var x = replcljs.core.nth.call(null,vec__4038,0,null);
var xs = replcljs.core.nth.call(null,vec__4038,1,null);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when-let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"xs__4033__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/seq"))),replcljs.core.list.call(null,xs)))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,x),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/first"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"xs__4033__auto__")))))))))),body)))));
};
var when_first = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return when_first__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_first.cljs$lang$maxFixedArity = 3;
when_first.cljs$lang$applyTo = (function (arglist__4039){
var _AMPERSAND_form = replcljs.core.first(arglist__4039);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4039));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4039)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4039)));
return when_first__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_first.cljs$lang$arity$variadic = when_first__delegate;
return when_first;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"when-first")));
/**
* Ignores body, yields nil
* @param {...*} var_args
*/
replcljs.core.comment = (function() {
var comment__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
};
var comment = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return comment__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
comment.cljs$lang$maxFixedArity = 2;
comment.cljs$lang$applyTo = (function (arglist__4040){
var _AMPERSAND_form = replcljs.core.first(arglist__4040);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4040));
var body = replcljs.core.rest(replcljs.core.next(arglist__4040));
return comment__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
comment.cljs$lang$arity$variadic = comment__delegate;
return comment;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"comment")));
/**
* same as defn, yielding non-public def
* @param {...*} var_args
*/
replcljs.core.defn_ = (function() {
var defn___delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,"replcljs.core/defn")),replcljs.core.with_meta.call(null,name,replcljs.core.assoc.call(null,replcljs.core.meta.call(null,name),"\uFDD0'private",true)),decls);
};
var defn_ = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var decls = null;
if (replgoog.isDef(var_args)) {
  decls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return defn___delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, decls);
};
defn_.cljs$lang$maxFixedArity = 3;
defn_.cljs$lang$applyTo = (function (arglist__4041){
var _AMPERSAND_form = replcljs.core.first(arglist__4041);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4041));
var name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4041)));
var decls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4041)));
return defn___delegate(_AMPERSAND_form, _AMPERSAND_env, name, decls);
});
defn_.cljs$lang$arity$variadic = defn___delegate;
return defn_;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defn-")));
/**
* defs name to have the root value of the expr if the named var has
* no root value, else expr is unevaluated
*/
replcljs.core.defonce = (function defonce(_AMPERSAND_form,_AMPERSAND_env,name,expr){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when-not"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/resolve"))),replcljs.core.list.call(null,name)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"def"))),replcljs.core.list.call(null,name),replcljs.core.list.call(null,expr))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defonce")));
/**
* Repeatedly executes body while test expression is true. Presumes
* some side-effect will cause test to become false/nil. Returns nil
* @param {...*} var_args
*/
replcljs.core.while$ = (function() {
var while$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,test),body,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur")))))))))));
};
var while$ = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return while$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
while$.cljs$lang$maxFixedArity = 3;
while$.cljs$lang$applyTo = (function (arglist__4043){
var _AMPERSAND_form = replcljs.core.first(arglist__4043);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4043));
var test = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4043)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4043)));
return while$__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
while$.cljs$lang$arity$variadic = while$__delegate;
return while$;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"while")));
/**
* fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
*
* Takes a vector of function specs and a body, and generates a set of
* bindings of functions to their names. All of the names are available
* in all of the definitions of the functions, as well as the body.
* @param {...*} var_args
*/
replcljs.core.letfn = (function() {
var letfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"letfn*"))),replcljs.core.list.call(null,replcljs.core.vec.call(null,replcljs.core.interleave.call(null,replcljs.core.map.call(null,replcljs.core.first,fnspecs),replcljs.core.map.call(null,(function (p1__4042_SHARP_){
return replcljs.core.cons.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn")),p1__4042_SHARP_);
}),fnspecs)))),body));
};
var letfn = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return letfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
};
letfn.cljs$lang$maxFixedArity = 3;
letfn.cljs$lang$applyTo = (function (arglist__4044){
var _AMPERSAND_form = replcljs.core.first(arglist__4044);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4044));
var fnspecs = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4044)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4044)));
return letfn__delegate(_AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
});
letfn.cljs$lang$arity$variadic = letfn__delegate;
return letfn;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"letfn")));
/**
* binding => binding-form init-expr
*
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein.
* @param {...*} var_args
*/
replcljs.core.let$ = (function() {
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"let*"))),replcljs.core.list.call(null,replcljs.core.destructure.call(null,bindings)),body));
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
let$.cljs$lang$maxFixedArity = 3;
let$.cljs$lang$applyTo = (function (arglist__4045){
var _AMPERSAND_form = replcljs.core.first(arglist__4045);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4045));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4045)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4045)));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"let")));
/**
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein. Acts as a recur target.
* @param {...*} var_args
*/
replcljs.core.loop = (function() {
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var db = replcljs.core.destructure.call(null,bindings);
if(replcljs.core._EQ_.call(null,db,bindings))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"loop*"))),replcljs.core.list.call(null,bindings),body));
} else
{var vs = replcljs.core.take_nth.call(null,2,replcljs.core.drop.call(null,1,bindings));
var bs = replcljs.core.take_nth.call(null,2,bindings);
var gs = replcljs.core.map.call(null,(function (b){
if(replcljs.core.symbol_QMARK_.call(null,b))
{return b;
} else
{return replcljs.core.gensym.call(null);
}
}),bs);
var bfs = replcljs.core.reduce.call(null,(function (ret,p__4049){
var vec__4050 = p__4049;
var b = replcljs.core.nth.call(null,vec__4050,0,null);
var v = replcljs.core.nth.call(null,vec__4050,1,null);
var g = replcljs.core.nth.call(null,vec__4050,2,null);
if(replcljs.core.symbol_QMARK_.call(null,b))
{return replcljs.core.conj.call(null,ret,g,v);
} else
{return replcljs.core.conj.call(null,ret,g,v,b,g);
}
}),replcljs.core.PersistentVector.EMPTY,replcljs.core.map.call(null,replcljs.core.vector,bs,vs,gs));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,bfs),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"loop*"))),replcljs.core.list.call(null,replcljs.core.vec.call(null,replcljs.core.interleave.call(null,gs,gs))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.vec.call(null,replcljs.core.interleave.call(null,bs,gs))),body))))))));
}
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
loop.cljs$lang$maxFixedArity = 3;
loop.cljs$lang$applyTo = (function (arglist__4051){
var _AMPERSAND_form = replcljs.core.first(arglist__4051);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4051));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4051)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4051)));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"loop")));
/**
* protocol fqn -> [partition number, bit]
*/
replcljs.core.fast_path_protocols = replcljs.core.zipmap.call(null,replcljs.core.map.call(null,(function (p1__4046_SHARP_){
return replcljs.core.symbol.call(null,"replcljs.core",[replcljs.core.str(p1__4046_SHARP_)].join(''));
}),replcljs.core.vec([(new replcljs.core.Symbol(null,"IFn")),(new replcljs.core.Symbol(null,"ICounted")),(new replcljs.core.Symbol(null,"IEmptyableCollection")),(new replcljs.core.Symbol(null,"ICollection")),(new replcljs.core.Symbol(null,"IIndexed")),(new replcljs.core.Symbol(null,"ASeq")),(new replcljs.core.Symbol(null,"ISeq")),(new replcljs.core.Symbol(null,"INext")),(new replcljs.core.Symbol(null,"ILookup")),(new replcljs.core.Symbol(null,"IAssociative")),(new replcljs.core.Symbol(null,"IMap")),(new replcljs.core.Symbol(null,"IMapEntry")),(new replcljs.core.Symbol(null,"ISet")),(new replcljs.core.Symbol(null,"IStack")),(new replcljs.core.Symbol(null,"IVector")),(new replcljs.core.Symbol(null,"IDeref")),(new replcljs.core.Symbol(null,"IDerefWithTimeout")),(new replcljs.core.Symbol(null,"IMeta")),(new replcljs.core.Symbol(null,"IWithMeta")),(new replcljs.core.Symbol(null,"IReduce")),(new replcljs.core.Symbol(null,"IKVReduce")),(new replcljs.core.Symbol(null,"IEquiv")),(new replcljs.core.Symbol(null,"IHash")),(new replcljs.core.Symbol(null,"ISeqable")),(new replcljs.core.Symbol(null,"ISequential")),(new replcljs.core.Symbol(null,"IList")),(new replcljs.core.Symbol(null,"IRecord")),(new replcljs.core.Symbol(null,"IReversible")),(new replcljs.core.Symbol(null,"ISorted")),(new replcljs.core.Symbol(null,"IPrintable")),(new replcljs.core.Symbol(null,"IWriter")),(new replcljs.core.Symbol(null,"IPrintWithWriter")),(new replcljs.core.Symbol(null,"IPending")),(new replcljs.core.Symbol(null,"IWatchable")),(new replcljs.core.Symbol(null,"IEditableCollection")),(new replcljs.core.Symbol(null,"ITransientCollection")),(new replcljs.core.Symbol(null,"ITransientAssociative")),(new replcljs.core.Symbol(null,"ITransientMap")),(new replcljs.core.Symbol(null,"ITransientVector")),(new replcljs.core.Symbol(null,"ITransientSet")),(new replcljs.core.Symbol(null,"IMultiFn")),(new replcljs.core.Symbol(null,"IChunkedSeq")),(new replcljs.core.Symbol(null,"IChunkedNext")),(new replcljs.core.Symbol(null,"IComparable"))])),replcljs.core.iterate.call(null,(function (p__4052){
var vec__4053 = p__4052;
var p = replcljs.core.nth.call(null,vec__4053,0,null);
var b = replcljs.core.nth.call(null,vec__4053,1,null);
if((2147483648 === b))
{return replcljs.core.PersistentVector.fromArray([(p + 1),1], true);
} else
{return replcljs.core.PersistentVector.fromArray([p,(b << 1)], true);
}
}),replcljs.core.PersistentVector.fromArray([0,1], true)));
/**
* total number of partitions
*/
replcljs.core.fast_path_protocol_partitions_count = (function (){var c = replcljs.core.count.call(null,replcljs.core.fast_path_protocols);
var m = (c % 32);
if((m === 0))
{return replcljs.core.quot.call(null,c,32);
} else
{return (replcljs.core.quot.call(null,c,32) + 1);
}
})();
replcljs.core.bool_expr = (function bool_expr(e){
return replcljs.core.vary_meta.call(null,e,replcljs.core.assoc,"\uFDD0'tag",(new replcljs.core.Symbol(null,"boolean")));
});
replcljs.core.coercive_not = (function coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return replcljs.core.bool_expr.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),"(!~{})",x));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"coercive-not")));
/**
* @param {...*} var_args
*/
replcljs.core.unsafe_bit_and = (function() {
var unsafe_bit_and = null;
var unsafe_bit_and__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return replcljs.core.bool_expr.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),"(~{} & ~{})",x,y));
});
var unsafe_bit_and__5 = (function() {
var G__4054__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/unsafe-bit-and"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/unsafe-bit-and"))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,y)))),more));
};
var G__4054 = function (_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = null;
if (replgoog.isDef(var_args)) {
  more = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return G__4054__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, y, more);
};
G__4054.cljs$lang$maxFixedArity = 4;
G__4054.cljs$lang$applyTo = (function (arglist__4055){
var _AMPERSAND_form = replcljs.core.first(arglist__4055);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4055));
var x = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4055)));
var y = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4055))));
var more = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4055))));
return G__4054__delegate(_AMPERSAND_form, _AMPERSAND_env, x, y, more);
});
G__4054.cljs$lang$arity$variadic = G__4054__delegate;
return G__4054;
})()
;
unsafe_bit_and = function(_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return unsafe_bit_and__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,y);
default:
return unsafe_bit_and__5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,y, replcljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsafe_bit_and.cljs$lang$maxFixedArity = 4;
unsafe_bit_and.cljs$lang$applyTo = unsafe_bit_and__5.cljs$lang$applyTo;
unsafe_bit_and.cljs$lang$arity$4 = unsafe_bit_and__4;
unsafe_bit_and.cljs$lang$arity$variadic = unsafe_bit_and__5.cljs$lang$arity$variadic;
return unsafe_bit_and;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"unsafe-bit-and")));
replcljs.core.base_type = replcljs.core.PersistentArrayMap.fromArrays([null,(new replcljs.core.Symbol(null,"object")),(new replcljs.core.Symbol(null,"string")),(new replcljs.core.Symbol(null,"number")),(new replcljs.core.Symbol(null,"array")),(new replcljs.core.Symbol(null,"function")),(new replcljs.core.Symbol(null,"boolean")),(new replcljs.core.Symbol(null,"default"))],["null","object","string","number","array","function","boolean","_"]);
/**
* @param {...*} var_args
*/
replcljs.core.reify = (function() {
var reify__delegate = function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = replcljs.core.gensym.call(null,"t");
var meta_sym = replcljs.core.gensym.call(null,"meta");
var this_sym = replcljs.core.gensym.call(null,"_");
var locals = replcljs.core.keys.call(null,(new replcljs.core.Keyword("\uFDD0'locals")).call(null,_AMPERSAND_env));
var ns = (new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var munge = replcljs.compiler.munge;
var ns_t = replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),[replcljs.core.str(munge.call(null,ns)),replcljs.core.str("."),replcljs.core.str(munge.call(null,t))].join(''));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/undefined?"))),replcljs.core.list.call(null,ns_t)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/deftype"))),replcljs.core.list.call(null,t),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,locals,replcljs.core.list.call(null,meta_sym))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/IWithMeta"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-with-meta"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,this_sym),replcljs.core.list.call(null,meta_sym))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,t),locals,replcljs.core.list.call(null,meta_sym))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/IMeta"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-meta"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,this_sym))))),replcljs.core.list.call(null,meta_sym)))),impls)))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,t),locals,replcljs.core.list.call(null,null))))));
};
var reify = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return reify__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, impls);
};
reify.cljs$lang$maxFixedArity = 2;
reify.cljs$lang$applyTo = (function (arglist__4056){
var _AMPERSAND_form = replcljs.core.first(arglist__4056);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4056));
var impls = replcljs.core.rest(replcljs.core.next(arglist__4056));
return reify__delegate(_AMPERSAND_form, _AMPERSAND_env, impls);
});
reify.cljs$lang$arity$variadic = reify__delegate;
return reify;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"reify")));
/**
* Defines a scope where JavaScript's implicit "this" is bound to the name provided.
* @param {...*} var_args
*/
replcljs.core.this_as = (function() {
var this_as__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,name),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*"))),replcljs.core.list.call(null,"this")))))))),body));
};
var this_as = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return this_as__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, body);
};
this_as.cljs$lang$maxFixedArity = 3;
this_as.cljs$lang$applyTo = (function (arglist__4057){
var _AMPERSAND_form = replcljs.core.first(arglist__4057);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4057));
var name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4057)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4057)));
return this_as__delegate(_AMPERSAND_form, _AMPERSAND_env, name, body);
});
this_as.cljs$lang$arity$variadic = this_as__delegate;
return this_as;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"this-as")));
replcljs.core.to_property = (function to_property(sym){
return replcljs.core.symbol.call(null,[replcljs.core.str("-"),replcljs.core.str(sym)].join(''));
});
replcljs.core.parse_impls = (function parse_impls(specs){
var ret = replcljs.core.ObjMap.EMPTY;
var s = specs;
while(true){
if(replcljs.core.seq.call(null,s))
{{
var G__4060 = replcljs.core.assoc.call(null,ret,replcljs.core.first.call(null,s),replcljs.core.take_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s)));
var G__4061 = replcljs.core.drop_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s));
ret = G__4060;
s = G__4061;
continue;
}
} else
{return ret;
}
break;
}
});
/**
* @param {...*} var_args
*/
replcljs.core.extend_type = (function() {
var extend_type__delegate = function (_AMPERSAND_form,_AMPERSAND_env,tsym,impls){
var resolve = (function (p1__4058_SHARP_){
var ret = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__4058_SHARP_));
if(replcljs.core.truth_(ret))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str([replcljs.core.str("Can't resolve: "),replcljs.core.str(p1__4058_SHARP_)].join('')),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,(new replcljs.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = replcljs.core.parse_impls.call(null,impls);
var warn_if_not_protocol = (function (p1__4059_SHARP_){
if(replcljs.core._EQ_.call(null,(new replcljs.core.Symbol(null,"Object")),p1__4059_SHARP_))
{return null;
} else
{if(replcljs.core.truth_(replcljs.analyzer._STAR_cljs_warn_on_undeclared_STAR_))
{var temp__4090__auto__ = replcljs.analyzer.resolve_existing_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__4059_SHARP_);
if(replcljs.core.truth_(temp__4090__auto__))
{var var$ = temp__4090__auto__;
if(replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'protocol-symbol")).call(null,var$)))
{} else
{replcljs.analyzer.warning.call(null,_AMPERSAND_env,[replcljs.core.str("WARNING: Symbol "),replcljs.core.str(p1__4059_SHARP_),replcljs.core.str(" is not a protocol")].join(''));
}
if(replcljs.core.truth_((function (){var and__3941__auto__ = replcljs.analyzer._STAR_cljs_warn_protocol_deprecated_STAR_;
if(replcljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (new replcljs.core.Keyword("\uFDD0'deprecated")).call(null,var$);
if(replcljs.core.truth_(and__3941__auto____$1))
{return replcljs.core.not.call(null,(new replcljs.core.Keyword("\uFDD0'deprecation-nowarn")).call(null,replcljs.core.meta.call(null,p1__4059_SHARP_)));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return replcljs.analyzer.warning.call(null,_AMPERSAND_env,[replcljs.core.str("WARNING: Protocol "),replcljs.core.str(p1__4059_SHARP_),replcljs.core.str(" is deprecated")].join(''));
} else
{return null;
}
} else
{return replcljs.analyzer.warning.call(null,_AMPERSAND_env,[replcljs.core.str("WARNING: Can't resolve protocol symbol "),replcljs.core.str(p1__4059_SHARP_)].join(''));
}
} else
{return null;
}
}
});
var skip_flag = replcljs.core.set.call(null,(new replcljs.core.Keyword("\uFDD0'skip-protocol-flag")).call(null,replcljs.core.meta.call(null,tsym)));
if(replcljs.core.truth_(replcljs.core.base_type.call(null,tsym)))
{var t = replcljs.core.base_type.call(null,tsym);
var assign_impls = (function (p__4084){
var vec__4085 = p__4084;
var p = replcljs.core.nth.call(null,vec__4085,0,null);
var sigs = replcljs.core.nth.call(null,vec__4085,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pfn_prefix = replcljs.core.subs.call(null,[replcljs.core.str(psym)].join(''),0,([replcljs.core.str(psym)].join('').indexOf("/") + 1));
return replcljs.core.cons.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aset"))),replcljs.core.list.call(null,psym),replcljs.core.list.call(null,t),replcljs.core.list.call(null,true))),replcljs.core.map.call(null,(function (p__4086){
var vec__4087 = p__4086;
var f = replcljs.core.nth.call(null,vec__4087,0,null);
var meths = replcljs.core.nthnext.call(null,vec__4087,1);
var form = vec__4087;
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aset"))),replcljs.core.list.call(null,replcljs.core.symbol.call(null,[replcljs.core.str(pfn_prefix),replcljs.core.str(f)].join(''))),replcljs.core.list.call(null,t),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),meths)),replcljs.core.meta.call(null,form)))));
}),sigs));
});
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.mapcat.call(null,assign_impls,impl_map)));
} else
{var t = resolve.call(null,tsym);
var prototype_prefix = (function (sym){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/.."))),replcljs.core.list.call(null,tsym),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-prototype"))),replcljs.core.list.call(null,replcljs.core.to_property.call(null,sym))));
});
var assign_impls = (function (p__4088){
var vec__4089 = p__4088;
var p = replcljs.core.nth.call(null,vec__4089,0,null);
var sigs = replcljs.core.nth.call(null,vec__4089,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pprefix = replcljs.compiler.protocol_prefix.call(null,psym);
if(replcljs.core._EQ_.call(null,p,(new replcljs.core.Symbol(null,"Object"))))
{var adapt_params = (function (p__4090){
var vec__4091 = p__4090;
var sig = replcljs.core.nth.call(null,vec__4091,0,null);
var body = replcljs.core.nthnext.call(null,vec__4091,1);
var vec__4092 = sig;
var tname = replcljs.core.nth.call(null,vec__4092,0,null);
var args = replcljs.core.nthnext.call(null,vec__4092,1);
return replcljs.core.list.call(null,replcljs.core.vec.call(null,args),replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,"this-as")),replcljs.core.vary_meta.call(null,tname,replcljs.core.assoc,"\uFDD0'tag",t),body));
});
return replcljs.core.map.call(null,(function (p__4093){
var vec__4094 = p__4093;
var f = replcljs.core.nth.call(null,vec__4094,0,null);
var meths = replcljs.core.nthnext.call(null,vec__4094,1);
var form = vec__4094;
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,f)),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.map.call(null,adapt_params,meths))),replcljs.core.meta.call(null,form)))));
}),sigs);
} else
{return replcljs.core.concat.call(null,(replcljs.core.truth_(skip_flag.call(null,psym))?null:replcljs.core.PersistentVector.fromArray([replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,pprefix)),replcljs.core.list.call(null,true)))], true)),replcljs.core.mapcat.call(null,(function (p__4095){
var vec__4096 = p__4095;
var f = replcljs.core.nth.call(null,vec__4096,0,null);
var meths = replcljs.core.nthnext.call(null,vec__4096,1);
var form = vec__4096;
if(replcljs.core._EQ_.call(null,psym,(new replcljs.core.Symbol(null,"replcljs.core/IFn"))))
{var adapt_params = (function (p__4097){
var vec__4098 = p__4097;
var vec__4099 = replcljs.core.nth.call(null,vec__4098,0,null);
var targ = replcljs.core.nth.call(null,vec__4099,0,null);
var args = replcljs.core.nthnext.call(null,vec__4099,1);
var sig = vec__4099;
var body = replcljs.core.nthnext.call(null,vec__4098,1);
var this_sym = replcljs.core.with_meta.call(null,replcljs.core.gensym.call(null,"this-sym"),replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.vec.call(null,replcljs.core.cons.call(null,this_sym,args))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/this-as"))),replcljs.core.list.call(null,this_sym),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,targ),replcljs.core.list.call(null,this_sym))))),body))))))));
});
var meths__$1 = replcljs.core.map.call(null,adapt_params,meths);
var this_sym = replcljs.core.with_meta.call(null,replcljs.core.gensym.call(null,"this-sym"),replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
var argsym = replcljs.core.gensym.call(null,"args");
return replcljs.core.PersistentVector.fromArray([replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,(new replcljs.core.Symbol(null,"call")))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),meths__$1)),replcljs.core.meta.call(null,form))))),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,(new replcljs.core.Symbol(null,"apply")))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.PersistentVector.fromArray([this_sym,argsym], true)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".apply"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-call"))),replcljs.core.list.call(null,this_sym)))),replcljs.core.list.call(null,this_sym),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".concat"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/array"))),replcljs.core.list.call(null,this_sym)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aclone"))),replcljs.core.list.call(null,argsym)))))))))))),replcljs.core.meta.call(null,form)))))], true);
} else
{var pf = [replcljs.core.str(pprefix),replcljs.core.str(f)].join('');
var adapt_params = (function (p__4100){
var vec__4101 = p__4100;
var vec__4102 = replcljs.core.nth.call(null,vec__4101,0,null);
var targ = replcljs.core.nth.call(null,vec__4102,0,null);
var args = replcljs.core.nthnext.call(null,vec__4102,1);
var sig = vec__4102;
var body = replcljs.core.nthnext.call(null,vec__4101,1);
return replcljs.core.cons.call(null,replcljs.core.vec.call(null,replcljs.core.cons.call(null,replcljs.core.vary_meta.call(null,targ,replcljs.core.assoc,"\uFDD0'tag",t),args)),body);
});
if(replcljs.core.vector_QMARK_.call(null,replcljs.core.first.call(null,meths)))
{return replcljs.core.PersistentVector.fromArray([replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,[replcljs.core.str(pf),replcljs.core.str("$arity$"),replcljs.core.str(replcljs.core.count.call(null,replcljs.core.first.call(null,meths)))].join(''))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),adapt_params.call(null,meths))),replcljs.core.meta.call(null,form)))))], true);
} else
{return replcljs.core.map.call(null,(function (p__4103){
var vec__4104 = p__4103;
var sig = replcljs.core.nth.call(null,vec__4104,0,null);
var body = replcljs.core.nthnext.call(null,vec__4104,1);
var meth = vec__4104;
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,prototype_prefix.call(null,[replcljs.core.str(pf),replcljs.core.str("$arity$"),replcljs.core.str(replcljs.core.count.call(null,sig))].join(''))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,adapt_params.call(null,meth)))),replcljs.core.meta.call(null,form)))));
}),meths);
}
}
}),sigs));
}
});
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.mapcat.call(null,assign_impls,impl_map)));
}
};
var extend_type = function (_AMPERSAND_form,_AMPERSAND_env,tsym,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return extend_type__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, tsym, impls);
};
extend_type.cljs$lang$maxFixedArity = 3;
extend_type.cljs$lang$applyTo = (function (arglist__4105){
var _AMPERSAND_form = replcljs.core.first(arglist__4105);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4105));
var tsym = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4105)));
var impls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4105)));
return extend_type__delegate(_AMPERSAND_form, _AMPERSAND_env, tsym, impls);
});
extend_type.cljs$lang$arity$variadic = extend_type__delegate;
return extend_type;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"extend-type")));
replcljs.core.prepare_protocol_masks = (function prepare_protocol_masks(env,t,impls){
var resolve = (function (p1__4062_SHARP_){
var ret = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),p1__4062_SHARP_));
if(replcljs.core.truth_(ret))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str([replcljs.core.str("Can't resolve: "),replcljs.core.str(p1__4062_SHARP_)].join('')),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,(new replcljs.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = (function (){var ret = replcljs.core.ObjMap.EMPTY;
var s = impls;
while(true){
if(replcljs.core.seq.call(null,s))
{{
var G__4107 = replcljs.core.assoc.call(null,ret,replcljs.core.first.call(null,s),replcljs.core.take_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s)));
var G__4108 = replcljs.core.drop_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s));
ret = G__4107;
s = G__4108;
continue;
}
} else
{return ret;
}
break;
}
})();
var temp__4090__auto__ = replcljs.core.seq.call(null,replcljs.core.keep.call(null,replcljs.core.fast_path_protocols,replcljs.core.map.call(null,resolve,replcljs.core.keys.call(null,impl_map))));
if(temp__4090__auto__)
{var fpp_pbs = temp__4090__auto__;
var fpps = replcljs.core.into.call(null,replcljs.core.PersistentHashSet.EMPTY,replcljs.core.filter.call(null,replcljs.core.partial.call(null,replcljs.core.contains_QMARK_,replcljs.core.fast_path_protocols),replcljs.core.map.call(null,resolve,replcljs.core.keys.call(null,impl_map))));
var fpp_partitions = replcljs.core.group_by.call(null,replcljs.core.first,fpp_pbs);
var fpp_partitions__$1 = replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,replcljs.core.map.call(null,replcljs.core.juxt.call(null,replcljs.core.key,replcljs.core.comp.call(null,replcljs.core.partial.call(null,replcljs.core.map,replcljs.core.peek),replcljs.core.val)),fpp_partitions));
var fpp_partitions__$2 = replcljs.core.into.call(null,replcljs.core.ObjMap.EMPTY,replcljs.core.map.call(null,replcljs.core.juxt.call(null,replcljs.core.key,replcljs.core.comp.call(null,replcljs.core.partial.call(null,replcljs.core.reduce,replcljs.core.bit_or),replcljs.core.val)),fpp_partitions__$1));
return replcljs.core.PersistentVector.fromArray([fpps,replcljs.core.reduce.call(null,(function (ps,p){
return replcljs.core.update_in.call(null,ps,replcljs.core.PersistentVector.fromArray([p], true),replcljs.core.fnil.call(null,replcljs.core.identity,0));
}),fpp_partitions__$2,replcljs.core.range.call(null,replcljs.core.fast_path_protocol_partitions_count))], true);
} else
{return null;
}
});
replcljs.core.dt__GT_et = (function() {
var dt__GT_et = null;
var dt__GT_et__3 = (function (t,specs,fields){
return dt__GT_et.call(null,t,specs,fields,false);
});
var dt__GT_et__4 = (function (t,specs,fields,inline){
var ret = replcljs.core.PersistentVector.EMPTY;
var s = specs;
while(true){
if(replcljs.core.seq.call(null,s))
{{
var G__4114 = replcljs.core.into.call(null,replcljs.core.conj.call(null,ret,replcljs.core.first.call(null,s)),replcljs.core.reduce.call(null,((function (ret,s){
return (function (v,p__4112){
var vec__4113 = p__4112;
var f = replcljs.core.nth.call(null,vec__4113,0,null);
var sigs = replcljs.core.nth.call(null,vec__4113,1,null);
return replcljs.core.conj.call(null,v,replcljs.core.vary_meta.call(null,replcljs.core.cons.call(null,f,replcljs.core.map.call(null,((function (ret,s,vec__4113,f,sigs){
return (function (p1__4106_SHARP_){
return replcljs.core.cons.call(null,replcljs.core.second.call(null,p1__4106_SHARP_),replcljs.core.nnext.call(null,p1__4106_SHARP_));
});})(ret,s,vec__4113,f,sigs))
,sigs)),replcljs.core.assoc,"\uFDD0'replcljs.analyzer/type",t,"\uFDD0'replcljs.analyzer/fields",fields,"\uFDD0'protocol-impl",true,"\uFDD0'protocol-inline",inline));
});})(ret,s))
,replcljs.core.PersistentVector.EMPTY,replcljs.core.group_by.call(null,replcljs.core.first,replcljs.core.take_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s)))));
var G__4115 = replcljs.core.drop_while.call(null,replcljs.core.seq_QMARK_,replcljs.core.next.call(null,s));
ret = G__4114;
s = G__4115;
continue;
}
} else
{return ret;
}
break;
}
});
dt__GT_et = function(t,specs,fields,inline){
switch(arguments.length){
case 3:
return dt__GT_et__3.call(this,t,specs,fields);
case 4:
return dt__GT_et__4.call(this,t,specs,fields,inline);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt__GT_et.cljs$lang$arity$3 = dt__GT_et__3;
dt__GT_et.cljs$lang$arity$4 = dt__GT_et__4;
return dt__GT_et;
})()
;
replcljs.core.collect_protocols = (function collect_protocols(impls,env){
return replcljs.core.into.call(null,replcljs.core.PersistentHashSet.EMPTY,replcljs.core.map.call(null,(function (p1__4109_SHARP_){
return (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,env,"\uFDD0'locals"),p1__4109_SHARP_));
}),replcljs.core.filter.call(null,replcljs.core.symbol_QMARK_,impls)));
});
/**
* @param {...*} var_args
*/
replcljs.core.deftype = (function() {
var deftype__delegate = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
var r = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),t));
var vec__4124 = replcljs.core.prepare_protocol_masks.call(null,_AMPERSAND_env,t,impls);
var fpps = replcljs.core.nth.call(null,vec__4124,0,null);
var pmasks = replcljs.core.nth.call(null,vec__4124,1,null);
var protocols = replcljs.core.collect_protocols.call(null,impls,_AMPERSAND_env);
var t__$1 = replcljs.core.vary_meta.call(null,t,replcljs.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
if(replcljs.core.seq.call(null,impls))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"deftype*"))),replcljs.core.list.call(null,t__$1),replcljs.core.list.call(null,fields),replcljs.core.list.call(null,pmasks)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$type"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,true)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4116__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/list"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4116__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4117__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"opt__4118__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-write"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4117__auto__"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/extend-type"))),replcljs.core.list.call(null,t__$1),replcljs.core.dt__GT_et.call(null,t__$1,impls,fields,true)))),replcljs.core.list.call(null,t__$1)));
} else
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"deftype*"))),replcljs.core.list.call(null,t__$1),replcljs.core.list.call(null,fields),replcljs.core.list.call(null,pmasks)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$type"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,true)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4119__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/list"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),replcljs.core.list.call(null,t__$1)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4119__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4120__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"opts__4121__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-write"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4120__auto__"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,t__$1)));
}
};
var deftype = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return deftype__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
};
deftype.cljs$lang$maxFixedArity = 4;
deftype.cljs$lang$applyTo = (function (arglist__4125){
var _AMPERSAND_form = replcljs.core.first(arglist__4125);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4125));
var t = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4125)));
var fields = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4125))));
var impls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4125))));
return deftype__delegate(_AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
});
deftype.cljs$lang$arity$variadic = deftype__delegate;
return deftype;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"deftype")));
replcljs.core.caching_hash = (function caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__"))),replcljs.core.list.call(null,hash_key))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/if-not"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/nil?"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__")))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,hash_fn),replcljs.core.list.call(null,coll)))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,hash_key),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__")))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"h__4122__auto__")))))))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"caching-hash")));
/**
* Do not use this directly - use defrecord
*/
replcljs.core.emit_defrecord = (function emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = replcljs.core.vec.call(null,replcljs.core.map.call(null,(function (p1__4126_SHARP_){
return replcljs.core.with_meta.call(null,p1__4126_SHARP_,null);
}),fields));
var base_fields = fields__$1;
var fields__$2 = replcljs.core.conj.call(null,fields__$1,(new replcljs.core.Symbol(null,"__meta")),(new replcljs.core.Symbol(null,"__extmap")),replcljs.core.with_meta.call(null,(new replcljs.core.Symbol(null,"__hash")),replcljs.core.ObjMap.fromObject(["\uFDD0'mutable"],{"\uFDD0'mutable":true})));
var gs = replcljs.core.gensym.call(null);
var ksym = replcljs.core.gensym.call(null,"k");
var impls__$1 = replcljs.core.concat.call(null,impls,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"IRecord")),(new replcljs.core.Symbol(null,"IHash")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-hash"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4127__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/caching-hash"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4127__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"hash-imap"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__hash")))))))),(new replcljs.core.Symbol(null,"IEquiv")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-equiv"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4128__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"other__4129__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/and"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"other__4129__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/identical?"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-constructor"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4128__auto__")))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-constructor"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"other__4129__auto__"))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/equiv-map"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4128__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"other__4129__auto__"))))))))),replcljs.core.list.call(null,true),replcljs.core.list.call(null,false)))))),(new replcljs.core.Symbol(null,"IMeta")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-meta"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4130__auto__"))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__meta"))))),(new replcljs.core.Symbol(null,"IWithMeta")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-with-meta"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4131__auto__"))),replcljs.core.list.call(null,gs))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,tagname),replcljs.core.replace.call(null,replcljs.core.PersistentArrayMap.fromArrays([(new replcljs.core.Symbol(null,"__meta"))],[gs]),fields__$2)))))),(new replcljs.core.Symbol(null,"ILookup")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-lookup"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4132__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4133__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-lookup"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4132__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4133__auto__"))),replcljs.core.list.call(null,null)))))),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-lookup"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4134__auto__"))),replcljs.core.list.call(null,ksym),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"else__4135__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/cond"))),replcljs.core.mapcat.call(null,(function (f){
return replcljs.core.PersistentVector.fromArray([replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/identical?"))),replcljs.core.list.call(null,ksym),replcljs.core.list.call(null,replcljs.core.keyword.call(null,f)))),f], true);
}),base_fields),replcljs.core.list.call(null,"\uFDD0'else"),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/get"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))),replcljs.core.list.call(null,ksym),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"else__4135__auto__"))))))))))),(new replcljs.core.Symbol(null,"ICounted")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-count"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4136__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/+"))),replcljs.core.list.call(null,replcljs.core.count.call(null,base_fields)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/count"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))))))))))),(new replcljs.core.Symbol(null,"ICollection")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-conj"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4137__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"entry__4138__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/vector?"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"entry__4138__auto__")))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-assoc"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4137__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-nth"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"entry__4138__auto__"))),replcljs.core.list.call(null,0)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-nth"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"entry__4138__auto__"))),replcljs.core.list.call(null,1))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/reduce"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-conj"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4137__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"entry__4138__auto__"))))))))))),(new replcljs.core.Symbol(null,"IAssociative")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-assoc"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4139__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4140__auto__"))),replcljs.core.list.call(null,gs))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/condp"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/identical?"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4140__auto__"))),replcljs.core.mapcat.call(null,(function (fld){
return replcljs.core.PersistentVector.fromArray([replcljs.core.keyword.call(null,fld),replcljs.core.list_STAR_.call(null,(new replcljs.core.Symbol(null,"new")),tagname,replcljs.core.replace.call(null,replcljs.core.PersistentArrayMap.fromArrays([fld,(new replcljs.core.Symbol(null,"__hash"))],[gs,null]),fields__$2))], true);
}),base_fields),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,tagname),replcljs.core.remove.call(null,replcljs.core.PersistentHashSet.fromArray([(new replcljs.core.Symbol(null,"__extmap")),(new replcljs.core.Symbol(null,"__hash"))]),fields__$2),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/assoc"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4140__auto__"))),replcljs.core.list.call(null,gs)))),replcljs.core.list.call(null,null))))))))),(new replcljs.core.Symbol(null,"IMap")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-dissoc"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4141__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4142__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/contains?"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_set,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.map.call(null,replcljs.core.keyword,base_fields))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4142__auto__")))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/dissoc"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/with-meta"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/into"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null)))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4141__auto__")))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__meta")))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4142__auto__")))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,tagname),replcljs.core.remove.call(null,replcljs.core.PersistentHashSet.fromArray([(new replcljs.core.Symbol(null,"__extmap")),(new replcljs.core.Symbol(null,"__hash"))]),fields__$2),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/not-empty"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/dissoc"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"k__4142__auto__"))))))))),replcljs.core.list.call(null,null))))))))),(new replcljs.core.Symbol(null,"ISeqable")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-seq"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4144__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/seq"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/concat"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.map.call(null,(function (p1__4143_SHARP_){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/vector")),replcljs.core.keyword.call(null,p1__4143_SHARP_),p1__4143_SHARP_);
}),base_fields))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))))))))))),(new replcljs.core.Symbol(null,"IPrintWithWriter")),replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"-pr-writer"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4146__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4147__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"opts__4148__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"pr-pair__4149__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"keyval__4150__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/pr-sequential-writer"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4147__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/pr-writer"))),replcljs.core.list.call(null,""),replcljs.core.list.call(null," "),replcljs.core.list.call(null,""),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"opts__4148__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"keyval__4150__auto__"))))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/pr-sequential-writer"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4147__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"pr-pair__4149__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"#"),replcljs.core.list.call(null,replcljs.core.name.call(null,rname)),replcljs.core.list.call(null,"{")))),replcljs.core.list.call(null,", "),replcljs.core.list.call(null,"}"),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"opts__4148__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/concat"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.map.call(null,(function (p1__4145_SHARP_){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/vector")),replcljs.core.keyword.call(null,p1__4145_SHARP_),p1__4145_SHARP_);
}),base_fields))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"__extmap"))))))))))))))], true));
var vec__4152 = replcljs.core.prepare_protocol_masks.call(null,env,tagname,impls__$1);
var fpps = replcljs.core.nth.call(null,vec__4152,0,null);
var pmasks = replcljs.core.nth.call(null,vec__4152,1,null);
var protocols = replcljs.core.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = replcljs.core.vary_meta.call(null,tagname,replcljs.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"defrecord*"))),replcljs.core.list.call(null,tagname__$1),replcljs.core.list.call(null,hinted_fields),replcljs.core.list.call(null,pmasks)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/extend-type"))),replcljs.core.list.call(null,tagname__$1),replcljs.core.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))))));
});
replcljs.core.build_positional_factory = (function build_positional_factory(rsym,rname,fields){
var fn_name = replcljs.core.symbol.call(null,[replcljs.core.str((new replcljs.core.Symbol(null,"->"))),replcljs.core.str(rsym)].join(''));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/defn"))),replcljs.core.list.call(null,fn_name),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,fields)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,rname),fields)))));
});
replcljs.core.build_map_factory = (function build_map_factory(rsym,rname,fields){
var fn_name = replcljs.core.symbol.call(null,[replcljs.core.str((new replcljs.core.Symbol(null,"map->"))),replcljs.core.str(rsym)].join(''));
var ms = replcljs.core.gensym.call(null);
var ks = replcljs.core.map.call(null,replcljs.core.keyword,fields);
var getters = replcljs.core.map.call(null,(function (k){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,k),replcljs.core.list.call(null,ms)));
}),ks);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/defn"))),replcljs.core.list.call(null,fn_name),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,ms))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,rname),getters,replcljs.core.list.call(null,null),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/dissoc"))),replcljs.core.list.call(null,ms),ks))))))));
});
/**
* @param {...*} var_args
*/
replcljs.core.defrecord = (function() {
var defrecord__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
var r = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),rsym));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null)))),replcljs.core.list.call(null,replcljs.core.emit_defrecord.call(null,_AMPERSAND_env,rsym,r,fields,impls)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$type"))),replcljs.core.list.call(null,r)))),replcljs.core.list.call(null,true)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),replcljs.core.list.call(null,r)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4153__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/list"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),replcljs.core.list.call(null,r)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"this__4153__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4154__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-write"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"writer__4154__auto__"))),replcljs.core.list.call(null,[replcljs.core.str(r)].join(''))))))))))),replcljs.core.list.call(null,replcljs.core.build_positional_factory.call(null,rsym,r,fields)),replcljs.core.list.call(null,replcljs.core.build_map_factory.call(null,rsym,r,fields)),replcljs.core.list.call(null,r)));
};
var defrecord = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,var_args){
var impls = null;
if (replgoog.isDef(var_args)) {
  impls = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return defrecord__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
};
defrecord.cljs$lang$maxFixedArity = 4;
defrecord.cljs$lang$applyTo = (function (arglist__4156){
var _AMPERSAND_form = replcljs.core.first(arglist__4156);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4156));
var rsym = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4156)));
var fields = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4156))));
var impls = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4156))));
return defrecord__delegate(_AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
});
defrecord.cljs$lang$arity$variadic = defrecord__delegate;
return defrecord;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defrecord")));
/**
* @param {...*} var_args
*/
replcljs.core.defprotocol = (function() {
var defprotocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var psym__$1 = replcljs.core.vary_meta.call(null,psym,replcljs.core.assoc,"\uFDD0'protocol-symbol",true);
var ns_name = (new replcljs.core.Keyword("\uFDD0'name")).call(null,(new replcljs.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var fqn = (function (n){
return replcljs.core.symbol.call(null,[replcljs.core.str(ns_name),replcljs.core.str("."),replcljs.core.str(n)].join(''));
});
var prefix = replcljs.compiler.protocol_prefix.call(null,p);
var methods$ = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,doc_PLUS_methods)))?replcljs.core.next.call(null,doc_PLUS_methods):doc_PLUS_methods);
var expand_sig = (function (fname,slot,sig){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,sig),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/and"))),replcljs.core.list.call(null,replcljs.core.first.call(null,sig)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,replcljs.core.first.call(null,sig)),replcljs.core.list.call(null,replcljs.core.symbol.call(null,[replcljs.core.str("-"),replcljs.core.str(slot)].join(''))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,replcljs.core.first.call(null,sig)),replcljs.core.list.call(null,slot),sig))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"x__4155__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/nil?"))),replcljs.core.list.call(null,replcljs.core.first.call(null,sig))))),replcljs.core.list.call(null,null),replcljs.core.list.call(null,replcljs.core.first.call(null,sig))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/or"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aget"))),replcljs.core.list.call(null,fqn.call(null,fname)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replgoog.typeOf"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"x__4155__auto__"))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aget"))),replcljs.core.list.call(null,fqn.call(null,fname)),replcljs.core.list.call(null,"_")))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/missing-protocol"))),replcljs.core.list.call(null,[replcljs.core.str(psym__$1),replcljs.core.str("."),replcljs.core.str(fname)].join('')),replcljs.core.list.call(null,replcljs.core.first.call(null,sig))))))))))),sig)))))))))));
});
var method = (function (p__4159){
var vec__4160 = p__4159;
var fname = replcljs.core.nth.call(null,vec__4160,0,null);
var sigs = replcljs.core.nthnext.call(null,vec__4160,1);
var sigs__$1 = replcljs.core.take_while.call(null,replcljs.core.vector_QMARK_,sigs);
var slot = replcljs.core.symbol.call(null,[replcljs.core.str(prefix),replcljs.core.str(replcljs.core.name.call(null,fname))].join(''));
var fname__$1 = replcljs.core.vary_meta.call(null,fname,replcljs.core.assoc,"\uFDD0'protocol",p);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/defn"))),replcljs.core.list.call(null,fname__$1),replcljs.core.map.call(null,(function (sig){
return expand_sig.call(null,fname__$1,replcljs.core.symbol.call(null,[replcljs.core.str(slot),replcljs.core.str("$arity$"),replcljs.core.str(replcljs.core.count.call(null,sig))].join('')),sig);
}),sigs__$1)));
});
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"*unchecked-if*"))),replcljs.core.list.call(null,true)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"def"))),replcljs.core.list.call(null,psym__$1),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*"))),replcljs.core.list.call(null,"{}"))))))),replcljs.core.map.call(null,method,methods$),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"*unchecked-if*"))),replcljs.core.list.call(null,false))))));
};
var defprotocol = function (_AMPERSAND_form,_AMPERSAND_env,psym,var_args){
var doc_PLUS_methods = null;
if (replgoog.isDef(var_args)) {
  doc_PLUS_methods = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return defprotocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
};
defprotocol.cljs$lang$maxFixedArity = 3;
defprotocol.cljs$lang$applyTo = (function (arglist__4161){
var _AMPERSAND_form = replcljs.core.first(arglist__4161);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4161));
var psym = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4161)));
var doc_PLUS_methods = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4161)));
return defprotocol__delegate(_AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
});
defprotocol.cljs$lang$arity$variadic = defprotocol__delegate;
return defprotocol;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defprotocol")));
replcljs.core.emit_extend_protocol = (function emit_extend_protocol(p,specs){
var impls = replcljs.core.parse_impls.call(null,specs);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.map.call(null,(function (p__4164){
var vec__4165 = p__4164;
var t = replcljs.core.nth.call(null,vec__4165,0,null);
var fs = replcljs.core.nth.call(null,vec__4165,1,null);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/extend-type"))),replcljs.core.list.call(null,t),replcljs.core.list.call(null,p),fs));
}),impls)));
});
/**
* Useful when you want to provide several implementations of the same
* protocol all at once. Takes a single protocol and the implementation
* of that protocol for one or more types. Expands into calls to
* extend-type:
*
* (extend-protocol Protocol
* AType
* (foo [x] ...)
* (bar [x y] ...)
* BType
* (foo [x] ...)
* (bar [x y] ...)
* AClass
* (foo [x] ...)
* (bar [x y] ...)
* nil
* (foo [x] ...)
* (bar [x y] ...))
*
* expands into:
*
* (do
* (clojure.core/extend-type AType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type BType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type AClass Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type nil Protocol
* (foo [x] ...)
* (bar [x y] ...)))
* @param {...*} var_args
*/
replcljs.core.extend_protocol = (function() {
var extend_protocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return replcljs.core.emit_extend_protocol.call(null,p,specs);
};
var extend_protocol = function (_AMPERSAND_form,_AMPERSAND_env,p,var_args){
var specs = null;
if (replgoog.isDef(var_args)) {
  specs = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return extend_protocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, p, specs);
};
extend_protocol.cljs$lang$maxFixedArity = 3;
extend_protocol.cljs$lang$applyTo = (function (arglist__4166){
var _AMPERSAND_form = replcljs.core.first(arglist__4166);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4166));
var p = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4166)));
var specs = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4166)));
return extend_protocol__delegate(_AMPERSAND_form, _AMPERSAND_env, p, specs);
});
extend_protocol.cljs$lang$arity$variadic = extend_protocol__delegate;
return extend_protocol;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"extend-protocol")));
/**
* Returns true if x satisfies the protocol
*/
replcljs.core.satisfies_QMARK_ = (function satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = (new replcljs.core.Keyword("\uFDD0'name")).call(null,replcljs.analyzer.resolve_var.call(null,replcljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var prefix = replcljs.compiler.protocol_prefix.call(null,p);
var xsym = replcljs.core.bool_expr.call(null,replcljs.core.gensym.call(null));
var vec__4168 = replcljs.core.fast_path_protocols.call(null,p);
var part = replcljs.core.nth.call(null,vec__4168,0,null);
var bit = replcljs.core.nth.call(null,vec__4168,1,null);
var msym = replcljs.core.symbol.call(null,[replcljs.core.str("-cljs$lang$protocol_mask$partition"),replcljs.core.str(part),replcljs.core.str("$")].join(''));
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,xsym),replcljs.core.list.call(null,x))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,xsym),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/or"))),replcljs.core.list.call(null,(replcljs.core.truth_(bit)?replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/unsafe-bit-and"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,xsym),replcljs.core.list.call(null,msym)))),replcljs.core.list.call(null,bit))):null)),replcljs.core.list.call(null,replcljs.core.bool_expr.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,xsym),replcljs.core.list.call(null,replcljs.core.symbol.call(null,[replcljs.core.str("-"),replcljs.core.str(prefix)].join('')))))))))),replcljs.core.list.call(null,true),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/coercive-not"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"."))),replcljs.core.list.call(null,xsym),replcljs.core.list.call(null,msym))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/type_satisfies_"))),replcljs.core.list.call(null,psym),replcljs.core.list.call(null,xsym)))),replcljs.core.list.call(null,false))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/type_satisfies_"))),replcljs.core.list.call(null,psym),replcljs.core.list.call(null,xsym)))))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"satisfies?")));
/**
* @param {...*} var_args
*/
replcljs.core.lazy_seq = (function() {
var lazy_seq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/LazySeq"))),replcljs.core.list.call(null,null),replcljs.core.list.call(null,false),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null)))),body))),replcljs.core.list.call(null,null)));
};
var lazy_seq = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return lazy_seq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
lazy_seq.cljs$lang$maxFixedArity = 2;
lazy_seq.cljs$lang$applyTo = (function (arglist__4169){
var _AMPERSAND_form = replcljs.core.first(arglist__4169);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4169));
var body = replcljs.core.rest(replcljs.core.next(arglist__4169));
return lazy_seq__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
lazy_seq.cljs$lang$arity$variadic = lazy_seq__delegate;
return lazy_seq;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"lazy-seq")));
/**
* @param {...*} var_args
*/
replcljs.core.delay = (function() {
var delay__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"new"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/Delay"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/atom"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,"\uFDD0'done"),replcljs.core.list.call(null,false),replcljs.core.list.call(null,"\uFDD0'value"),replcljs.core.list.call(null,null)))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null)))),body)))));
};
var delay = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return delay__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
delay.cljs$lang$maxFixedArity = 2;
delay.cljs$lang$applyTo = (function (arglist__4170){
var _AMPERSAND_form = replcljs.core.first(arglist__4170);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4170));
var body = replcljs.core.rest(replcljs.core.next(arglist__4170));
return delay__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
delay.cljs$lang$arity$variadic = delay__delegate;
return delay;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"delay")));
/**
* binding => var-symbol init-expr
*
* Creates new bindings for the (already-existing) vars, with the
* supplied initial values, executes the exprs in an implicit do, then
* re-establishes the bindings that existed before.  The new bindings
* are made in parallel (unlike let); all init-exprs are evaluated
* before the vars are bound to their new values.
* @param {...*} var_args
*/
replcljs.core.binding = (function() {
var binding__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = replcljs.core.take_nth.call(null,2,bindings);
var vals = replcljs.core.take_nth.call(null,2,replcljs.core.drop.call(null,1,bindings));
var tempnames = replcljs.core.map.call(null,replcljs.core.comp.call(null,replcljs.core.gensym,replcljs.core.name),names);
var binds = replcljs.core.map.call(null,replcljs.core.vector,names,vals);
var resets = replcljs.core.reverse.call(null,replcljs.core.map.call(null,replcljs.core.vector,names,tempnames));
replcljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.interleave.call(null,tempnames,names))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"try"))),replcljs.core.map.call(null,(function (p__4176){
var vec__4177 = p__4176;
var k = replcljs.core.nth.call(null,vec__4177,0,null);
var v = replcljs.core.nth.call(null,vec__4177,1,null);
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!")),k,v);
}),binds),body,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"finally"))),replcljs.core.map.call(null,(function (p__4178){
var vec__4179 = p__4178;
var k = replcljs.core.nth.call(null,vec__4179,0,null);
var v = replcljs.core.nth.call(null,vec__4179,1,null);
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"set!")),k,v);
}),resets)))))))));
};
var binding = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return binding__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
binding.cljs$lang$maxFixedArity = 3;
binding.cljs$lang$applyTo = (function (arglist__4180){
var _AMPERSAND_form = replcljs.core.first(arglist__4180);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4180));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4180)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4180)));
return binding__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
binding.cljs$lang$arity$variadic = binding__delegate;
return binding;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"binding")));
/**
* Takes a binary predicate, an expression, and a set of clauses.
* Each clause can take the form of either:
*
* test-expr result-expr
*
* test-expr :>> result-fn
*
* Note :>> is an ordinary keyword.
*
* For each clause, (pred test-expr expr) is evaluated. If it returns
* logical true, the clause is a match. If a binary clause matches, the
* result-expr is returned, if a ternary clause matches, its result-fn,
* which must be a unary function, is called with the result of the
* predicate as its argument, the result of that call being the return
* value of condp. A single default expression can follow the clauses,
* and its value will be returned if no clause matches. If no default
* expression is provided and no clause matches, an
* IllegalArgumentException is thrown.
* @param {...*} var_args
*/
replcljs.core.condp = (function() {
var condp__delegate = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = replcljs.core.gensym.call(null,"pred__");
var gexpr = replcljs.core.gensym.call(null,"expr__");
var emit = (function emit(pred__$1,expr__$1,args){
var vec__4187 = replcljs.core.split_at.call(null,((replcljs.core._EQ_.call(null,"\uFDD0'>>",replcljs.core.second.call(null,args)))?3:2),args);
var vec__4188 = replcljs.core.nth.call(null,vec__4187,0,null);
var a = replcljs.core.nth.call(null,vec__4188,0,null);
var b = replcljs.core.nth.call(null,vec__4188,1,null);
var c = replcljs.core.nth.call(null,vec__4188,2,null);
var clause = vec__4188;
var more = replcljs.core.nth.call(null,vec__4187,1,null);
var n = replcljs.core.count.call(null,clause);
if(replcljs.core._EQ_.call(null,0,n))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Error."))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"No matching clause: "),replcljs.core.list.call(null,expr__$1)))))))));
} else
{if(replcljs.core._EQ_.call(null,1,n))
{return a;
} else
{if(replcljs.core._EQ_.call(null,2,n))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,pred__$1),replcljs.core.list.call(null,a),replcljs.core.list.call(null,expr__$1)))),replcljs.core.list.call(null,b),replcljs.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{if("\uFDD0'else")
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/if-let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"p__4171__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,pred__$1),replcljs.core.list.call(null,a),replcljs.core.list.call(null,expr__$1)))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,c),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"p__4171__auto__")))))),replcljs.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{return null;
}
}
}
}
});
var gres = replcljs.core.gensym.call(null,"res__");
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,gpred),replcljs.core.list.call(null,pred),replcljs.core.list.call(null,gexpr),replcljs.core.list.call(null,expr))))),replcljs.core.list.call(null,emit.call(null,gpred,gexpr,clauses))));
};
var condp = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return condp__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
};
condp.cljs$lang$maxFixedArity = 4;
condp.cljs$lang$applyTo = (function (arglist__4189){
var _AMPERSAND_form = replcljs.core.first(arglist__4189);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4189));
var pred = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4189)));
var expr = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4189))));
var clauses = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4189))));
return condp__delegate(_AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
});
condp.cljs$lang$arity$variadic = condp__delegate;
return condp;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"condp")));
/**
* @param {...*} var_args
*/
replcljs.core.case$ = (function() {
var case$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((replcljs.core.odd_QMARK_.call(null,replcljs.core.count.call(null,clauses)))?replcljs.core.last.call(null,clauses):replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Error."))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"No matching clause: "),replcljs.core.list.call(null,e))))))))));
var assoc_test = (function assoc_test(m,test,expr){
if(replcljs.core.contains_QMARK_.call(null,m,test))
{throw (new Error([replcljs.core.str("Duplicate case test constant '"),replcljs.core.str(test),replcljs.core.str("'"),replcljs.core.str((replcljs.core.truth_((new replcljs.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env))?[replcljs.core.str(" on line "),replcljs.core.str((new replcljs.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env)),replcljs.core.str(" "),replcljs.core.str(replcljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else
{return replcljs.core.assoc.call(null,m,test,expr);
}
});
var pairs = replcljs.core.reduce.call(null,(function (m,p__4196){
var vec__4197 = p__4196;
var test = replcljs.core.nth.call(null,vec__4197,0,null);
var expr = replcljs.core.nth.call(null,vec__4197,1,null);
if(replcljs.core.seq_QMARK_.call(null,test))
{return replcljs.core.reduce.call(null,(function (m__$1,test__$1){
var test__$2 = ((replcljs.core.symbol_QMARK_.call(null,test__$1))?replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),test__$1):test__$1);
return assoc_test.call(null,m__$1,test__$2,expr);
}),m,test);
} else
{if(replcljs.core.symbol_QMARK_.call(null,test))
{return assoc_test.call(null,m,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote")),test),expr);
} else
{if("\uFDD0'else")
{return assoc_test.call(null,m,test,expr);
} else
{return null;
}
}
}
}),replcljs.core.ObjMap.EMPTY,replcljs.core.partition.call(null,2,clauses));
var esym = replcljs.core.gensym.call(null);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,esym),replcljs.core.list.call(null,e))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/cond"))),replcljs.core.mapcat.call(null,(function (p__4198){
var vec__4199 = p__4198;
var m = replcljs.core.nth.call(null,vec__4199,0,null);
var c = replcljs.core.nth.call(null,vec__4199,1,null);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/="))),replcljs.core.list.call(null,m),replcljs.core.list.call(null,esym)))),replcljs.core.list.call(null,c)));
}),pairs),replcljs.core.list.call(null,"\uFDD0'else"),replcljs.core.list.call(null,default$))))));
};
var case$ = function (_AMPERSAND_form,_AMPERSAND_env,e,var_args){
var clauses = null;
if (replgoog.isDef(var_args)) {
  clauses = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return case$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, e, clauses);
};
case$.cljs$lang$maxFixedArity = 3;
case$.cljs$lang$applyTo = (function (arglist__4200){
var _AMPERSAND_form = replcljs.core.first(arglist__4200);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4200));
var e = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4200)));
var clauses = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4200)));
return case$__delegate(_AMPERSAND_form, _AMPERSAND_env, e, clauses);
});
case$.cljs$lang$arity$variadic = case$__delegate;
return case$;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"case")));
/**
* (try expr* catch-clause* finally-clause?)
*
* Special Form
*
* catch-clause => (catch protoname name expr*)
* finally-clause => (finally expr*)
*
* Catches and handles JavaScript exceptions.
* @param {...*} var_args
*/
replcljs.core.try$ = (function() {
var try$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,forms){
var catch_QMARK_ = (function (p1__4190_SHARP_){
var and__3941__auto__ = replcljs.core.list_QMARK_.call(null,p1__4190_SHARP_);
if(and__3941__auto__)
{return replcljs.core._EQ_.call(null,replcljs.core.first.call(null,p1__4190_SHARP_),(new replcljs.core.Symbol(null,"catch")));
} else
{return and__3941__auto__;
}
});
var vec__4205 = replcljs.core.split_with.call(null,replcljs.core.complement.call(null,catch_QMARK_),forms);
var body = replcljs.core.nth.call(null,vec__4205,0,null);
var catches = replcljs.core.nth.call(null,vec__4205,1,null);
var vec__4206 = replcljs.core.split_with.call(null,catch_QMARK_,catches);
var catches__$1 = replcljs.core.nth.call(null,vec__4206,0,null);
var fin = replcljs.core.nth.call(null,vec__4206,1,null);
var e = replcljs.core.gensym.call(null,"e");
if(replcljs.core.every_QMARK_.call(null,(function (p1__4191_SHARP_){
return (replcljs.core.count.call(null,p1__4191_SHARP_) > 2);
}),catches__$1))
{} else
{throw (new Error([replcljs.core.str("Assert failed: "),replcljs.core.str("catch block must specify a prototype and a name"),replcljs.core.str("\n"),replcljs.core.str(replcljs.core.pr_str.call(null,replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"every?")),replcljs.core.list((new replcljs.core.Symbol(null,"fn*")),replcljs.core.vec([(new replcljs.core.Symbol(null,"p1__4191#"))]),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"replcljs.core/>")),replcljs.core.with_meta(replcljs.core.list((new replcljs.core.Symbol(null,"count")),(new replcljs.core.Symbol(null,"p1__4191#"))),replcljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",35)),2),replcljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",22))),(new replcljs.core.Symbol(null,"catches"))),replcljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",13))))].join('')));
}
if(replcljs.core.seq.call(null,catches__$1))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"try*"))),body,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"catch"))),replcljs.core.list.call(null,e),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/cond"))),replcljs.core.mapcat.call(null,(function (p__4207){
var vec__4208 = p__4207;
var _ = replcljs.core.nth.call(null,vec__4208,0,null);
var type = replcljs.core.nth.call(null,vec__4208,1,null);
var name = replcljs.core.nth.call(null,vec__4208,2,null);
var cb = replcljs.core.nthnext.call(null,vec__4208,3);
return replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/instance?"))),replcljs.core.list.call(null,type),replcljs.core.list.call(null,e)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,name),replcljs.core.list.call(null,e))))),cb))))));
}),catches__$1),replcljs.core.list.call(null,"\uFDD0'else"),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,e)))))))))),fin));
} else
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"try*"))),body,fin));
}
};
var try$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var forms = null;
if (replgoog.isDef(var_args)) {
  forms = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return try$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, forms);
};
try$.cljs$lang$maxFixedArity = 2;
try$.cljs$lang$applyTo = (function (arglist__4209){
var _AMPERSAND_form = replcljs.core.first(arglist__4209);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4209));
var forms = replcljs.core.rest(replcljs.core.next(arglist__4209));
return try$__delegate(_AMPERSAND_form, _AMPERSAND_env, forms);
});
try$.cljs$lang$arity$variadic = try$__delegate;
return try$;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"try")));
/**
* Evaluates expr and throws an exception if it does not evaluate to
* logical true.
*/
replcljs.core.assert = (function() {
var assert = null;
var assert__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(replcljs.core.truth_(replcljs.core._STAR_assert_STAR_))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when-not"))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Error."))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"Assert failed: "),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/pr-str"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote"))),replcljs.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
var assert__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(replcljs.core.truth_(replcljs.core._STAR_assert_STAR_))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when-not"))),replcljs.core.list.call(null,x),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"throw"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Error."))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"Assert failed: "),replcljs.core.list.call(null,message),replcljs.core.list.call(null,"\n"),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/pr-str"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"quote"))),replcljs.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
assert = function(_AMPERSAND_form,_AMPERSAND_env,x,message){
switch(arguments.length){
case 3:
return assert__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return assert__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assert.cljs$lang$arity$3 = assert__3;
assert.cljs$lang$arity$4 = assert__4;
return assert;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"assert")));
/**
* List comprehension. Takes a vector of one or more
* binding-form/collection-expr pairs, each followed by zero or more
* modifiers, and yields a lazy sequence of evaluations of expr.
* Collections are iterated in a nested fashion, rightmost fastest,
* and nested coll-exprs can refer to bindings created in prior
* binding-forms.  Supported modifiers are: :let [binding-form expr ...],
* :while test, :when test.
*
* (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
*/
replcljs.core.for$ = (function for$(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(replcljs.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("for requires a vector for its binding"));
}
if(replcljs.core.even_QMARK_.call(null,replcljs.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("for requires an even number of forms in binding vector"));
}
var to_groups = (function (seq_exprs__$1){
return replcljs.core.reduce.call(null,(function (groups,p__4234){
var vec__4235 = p__4234;
var k = replcljs.core.nth.call(null,vec__4235,0,null);
var v = replcljs.core.nth.call(null,vec__4235,1,null);
if(replcljs.core.keyword_QMARK_.call(null,k))
{return replcljs.core.conj.call(null,replcljs.core.pop.call(null,groups),replcljs.core.conj.call(null,replcljs.core.peek.call(null,groups),replcljs.core.PersistentVector.fromArray([k,v], true)));
} else
{return replcljs.core.conj.call(null,groups,replcljs.core.PersistentVector.fromArray([k,v], true));
}
}),replcljs.core.PersistentVector.EMPTY,replcljs.core.partition.call(null,2,seq_exprs__$1));
});
var err = (function() {
var G__4255__delegate = function (msg){
throw (new Error(replcljs.core.apply.call(null,replcljs.core.str,msg)));
};
var G__4255 = function (var_args){
var msg = null;
if (replgoog.isDef(var_args)) {
  msg = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4255__delegate.call(this, msg);
};
G__4255.cljs$lang$maxFixedArity = 0;
G__4255.cljs$lang$applyTo = (function (arglist__4256){
var msg = replcljs.core.seq(arglist__4256);;
return G__4255__delegate(msg);
});
G__4255.cljs$lang$arity$variadic = G__4255__delegate;
return G__4255;
})()
;
var emit_bind = (function emit_bind(p__4236){
var vec__4246 = p__4236;
var vec__4247 = replcljs.core.nth.call(null,vec__4246,0,null);
var bind = replcljs.core.nth.call(null,vec__4247,0,null);
var expr = replcljs.core.nth.call(null,vec__4247,1,null);
var mod_pairs = replcljs.core.nthnext.call(null,vec__4247,2);
var vec__4248 = replcljs.core.nthnext.call(null,vec__4246,1);
var vec__4249 = replcljs.core.nth.call(null,vec__4248,0,null);
var _ = replcljs.core.nth.call(null,vec__4249,0,null);
var next_expr = replcljs.core.nth.call(null,vec__4249,1,null);
var next_groups = vec__4248;
var giter = replcljs.core.gensym.call(null,"iter__");
var gxs = replcljs.core.gensym.call(null,"s__");
var do_mod = (function do_mod(p__4250){
var vec__4253 = p__4250;
var vec__4254 = replcljs.core.nth.call(null,vec__4253,0,null);
var k = replcljs.core.nth.call(null,vec__4254,0,null);
var v = replcljs.core.nth.call(null,vec__4254,1,null);
var pair = vec__4254;
var etc = replcljs.core.nthnext.call(null,vec__4253,1);
if(replcljs.core._EQ_.call(null,k,"\uFDD0'let"))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,do_mod.call(null,etc))));
} else
{if(replcljs.core._EQ_.call(null,k,"\uFDD0'while"))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,do_mod.call(null,etc))));
} else
{if(replcljs.core._EQ_.call(null,k,"\uFDD0'when"))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,do_mod.call(null,etc)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/rest"))),replcljs.core.list.call(null,gxs)))))))));
} else
{if(replcljs.core.keyword_QMARK_.call(null,k))
{return err.call(null,"Invalid 'for' keyword ",k);
} else
{if(replcljs.core.truth_(next_groups))
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"iterys__4210__auto__"))),replcljs.core.list.call(null,emit_bind.call(null,next_groups)),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"fs__4211__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/seq"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"iterys__4210__auto__"))),replcljs.core.list.call(null,next_expr))))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"fs__4211__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/concat"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"fs__4211__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,giter),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/rest"))),replcljs.core.list.call(null,gxs)))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/rest"))),replcljs.core.list.call(null,gxs))))))))))));
} else
{if("\uFDD0'else")
{return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/cons"))),replcljs.core.list.call(null,body_expr),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,giter),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/rest"))),replcljs.core.list.call(null,gxs)))))))));
} else
{return null;
}
}
}
}
}
}
});
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,giter),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,gxs))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/lazy-seq"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,gxs),replcljs.core.list.call(null,gxs))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when-first"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,bind),replcljs.core.list.call(null,gxs))))),replcljs.core.list.call(null,do_mod.call(null,mod_pairs)))))))))))));
});
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"iter__4212__auto__"))),replcljs.core.list.call(null,emit_bind.call(null,to_groups.call(null,seq_exprs))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"iter__4212__auto__"))),replcljs.core.list.call(null,replcljs.core.second.call(null,seq_exprs)))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"for")));
/**
* Repeatedly executes body (presumably for side-effects) with
* bindings and filtering as provided by "for".  Does not retain
* the head of the sequence. Returns nil.
* @param {...*} var_args
*/
replcljs.core.doseq = (function() {
var doseq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(replcljs.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires a vector for its binding"));
}
if(replcljs.core.even_QMARK_.call(null,replcljs.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires an even number of forms in binding vector"));
}
var step = (function step(recform,exprs){
if(replcljs.core.not.call(null,exprs))
{return replcljs.core.PersistentVector.fromArray([true,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),body))], true);
} else
{var k = replcljs.core.first.call(null,exprs);
var v = replcljs.core.second.call(null,exprs);
var seqsym = ((replcljs.core.keyword_QMARK_.call(null,k))?null:replcljs.core.gensym.call(null));
var recform__$1 = ((replcljs.core.keyword_QMARK_.call(null,k))?recform:replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/next"))),replcljs.core.list.call(null,seqsym)))))));
var steppair = step.call(null,recform__$1,replcljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,0);
var subform = steppair.call(null,1);
if(replcljs.core._EQ_.call(null,k,"\uFDD0'let"))
{return replcljs.core.PersistentVector.fromArray([needrec,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,subform)))], true);
} else
{if(replcljs.core._EQ_.call(null,k,"\uFDD0'while"))
{return replcljs.core.PersistentVector.fromArray([false,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,subform),(replcljs.core.truth_(needrec)?replcljs.core.PersistentVector.fromArray([recform__$1], true):null)))], true);
} else
{if(replcljs.core._EQ_.call(null,k,"\uFDD0'when"))
{return replcljs.core.PersistentVector.fromArray([false,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,v),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,subform),(replcljs.core.truth_(needrec)?replcljs.core.PersistentVector.fromArray([recform__$1], true):null)))),replcljs.core.list.call(null,recform__$1)))], true);
} else
{if("\uFDD0'else")
{return replcljs.core.PersistentVector.fromArray([true,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,seqsym),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/seq"))),replcljs.core.list.call(null,v)))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,seqsym),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,k),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/first"))),replcljs.core.list.call(null,seqsym)))))))),replcljs.core.list.call(null,subform),(replcljs.core.truth_(needrec)?replcljs.core.PersistentVector.fromArray([recform__$1], true):null)))))))))], true);
} else
{return null;
}
}
}
}
}
});
return replcljs.core.nth.call(null,step.call(null,null,replcljs.core.seq.call(null,seq_exprs)),1);
};
var doseq = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return doseq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
};
doseq.cljs$lang$maxFixedArity = 3;
doseq.cljs$lang$applyTo = (function (arglist__4257){
var _AMPERSAND_form = replcljs.core.first(arglist__4257);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4257));
var seq_exprs = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4257)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4257)));
return doseq__delegate(_AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
});
doseq.cljs$lang$arity$variadic = doseq__delegate;
return doseq;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"doseq")));
/**
* @param {...*} var_args
*/
replcljs.core.array = (function() {
var array__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = replcljs.core.apply.call(null,replcljs.core.str,replcljs.core.interpose.call(null,",",replcljs.core.take.call(null,replcljs.core.count.call(null,rest),replcljs.core.repeat.call(null,"~{}"))));
return replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),[replcljs.core.str("["),replcljs.core.str(xs_str),replcljs.core.str("]")].join('')),rest);
};
var array = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var rest = null;
if (replgoog.isDef(var_args)) {
  rest = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return array__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rest);
};
array.cljs$lang$maxFixedArity = 2;
array.cljs$lang$applyTo = (function (arglist__4258){
var _AMPERSAND_form = replcljs.core.first(arglist__4258);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4258));
var rest = replcljs.core.rest(replcljs.core.next(arglist__4258));
return array__delegate(_AMPERSAND_form, _AMPERSAND_env, rest);
});
array.cljs$lang$arity$variadic = array__delegate;
return array;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"array")));
replcljs.core.alength = (function alength(_AMPERSAND_form,_AMPERSAND_env,a){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),"~{}.length",a);
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"alength")));
replcljs.core.aclone = (function aclone(_AMPERSAND_form,_AMPERSAND_env,a){
return replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js*")),"~{}.slice()",a);
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"aclone")));
/**
* Maps an expression across an array a, using an index named idx, and
* return value named ret, initialized to a clone of a, then setting
* each element of ret to the evaluation of expr, returning the new
* array ret.
*/
replcljs.core.amap = (function amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"a__4259__auto__"))),replcljs.core.list.call(null,a),replcljs.core.list.call(null,ret),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aclone"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"a__4259__auto__")))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,idx),replcljs.core.list.call(null,0))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/<"))),replcljs.core.list.call(null,idx),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/alength"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"a__4259__auto__"))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"do"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/aset"))),replcljs.core.list.call(null,ret),replcljs.core.list.call(null,idx),replcljs.core.list.call(null,expr)))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/inc"))),replcljs.core.list.call(null,idx)))))))))),replcljs.core.list.call(null,ret)))))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"amap")));
/**
* Reduces an expression across an array a, using an index named idx,
* and return value named ret, initialized to init, setting ret to the
* evaluation of expr at each step, returning ret.
*/
replcljs.core.areduce = (function areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"a__4260__auto__"))),replcljs.core.list.call(null,a))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,idx),replcljs.core.list.call(null,0),replcljs.core.list.call(null,ret),replcljs.core.list.call(null,init))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"if"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/<"))),replcljs.core.list.call(null,idx),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/alength"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"a__4260__auto__"))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/inc"))),replcljs.core.list.call(null,idx)))),replcljs.core.list.call(null,expr)))),replcljs.core.list.call(null,ret)))))))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"areduce")));
/**
* bindings => name n
*
* Repeatedly executes body (presumably for side-effects) with name
* bound to integers from 0 through n-1.
* @param {...*} var_args
*/
replcljs.core.dotimes = (function() {
var dotimes__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = replcljs.core.first.call(null,bindings);
var n = replcljs.core.second.call(null,bindings);
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"n__4261__auto__"))),replcljs.core.list.call(null,n))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/loop"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,i),replcljs.core.list.call(null,0))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/when"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/<"))),replcljs.core.list.call(null,i),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"n__4261__auto__")))))),body,replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"recur"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/inc"))),replcljs.core.list.call(null,i)))))))))))))));
};
var dotimes = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return dotimes__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
dotimes.cljs$lang$maxFixedArity = 3;
dotimes.cljs$lang$applyTo = (function (arglist__4263){
var _AMPERSAND_form = replcljs.core.first(arglist__4263);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4263));
var bindings = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4263)));
var body = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4263)));
return dotimes__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
dotimes.cljs$lang$arity$variadic = dotimes__delegate;
return dotimes;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"dotimes")));
/**
* Throws an exception if the given option map contains keys not listed
* as valid, else returns nil.
* @param {...*} var_args
*/
replcljs.core.check_valid_options = (function() {
var check_valid_options__delegate = function (options,valid_keys){
if(replcljs.core.seq.call(null,replcljs.core.apply.call(null,replcljs.core.disj,replcljs.core.apply.call(null,replcljs.core.hash_set,replcljs.core.keys.call(null,options)),valid_keys)))
{throw replcljs.core.apply.call(null,replcljs.core.str,"Only these options are valid: ",replcljs.core.first.call(null,valid_keys),replcljs.core.map.call(null,(function (p1__4262_SHARP_){
return [replcljs.core.str(", "),replcljs.core.str(p1__4262_SHARP_)].join('');
}),replcljs.core.rest.call(null,valid_keys)));
} else
{return null;
}
};
var check_valid_options = function (options,var_args){
var valid_keys = null;
if (replgoog.isDef(var_args)) {
  valid_keys = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
}
return check_valid_options__delegate.call(this, options, valid_keys);
};
check_valid_options.cljs$lang$maxFixedArity = 1;
check_valid_options.cljs$lang$applyTo = (function (arglist__4269){
var options = replcljs.core.first(arglist__4269);
var valid_keys = replcljs.core.rest(arglist__4269);
return check_valid_options__delegate(options, valid_keys);
});
check_valid_options.cljs$lang$arity$variadic = check_valid_options__delegate;
return check_valid_options;
})()
;
/**
* Creates a new multimethod with the associated dispatch function.
* The docstring and attribute-map are optional.
*
* Options are key-value pairs and may be one of:
* :default    the default dispatch value, defaults to :default
* :hierarchy  the isa? hierarchy to use for dispatching
* defaults to the global hierarchy
* @param {...*} var_args
*/
replcljs.core.defmulti = (function() {
var defmulti__delegate = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,options)))?replcljs.core.first.call(null,options):null);
var options__$1 = ((replcljs.core.string_QMARK_.call(null,replcljs.core.first.call(null,options)))?replcljs.core.next.call(null,options):options);
var m = ((replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,options__$1)))?replcljs.core.first.call(null,options__$1):replcljs.core.ObjMap.EMPTY);
var options__$2 = ((replcljs.core.map_QMARK_.call(null,replcljs.core.first.call(null,options__$1)))?replcljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = replcljs.core.first.call(null,options__$2);
var options__$3 = replcljs.core.next.call(null,options__$2);
var m__$1 = (replcljs.core.truth_(docstring)?replcljs.core.assoc.call(null,m,"\uFDD0'doc",docstring):m);
var m__$2 = (replcljs.core.truth_(replcljs.core.meta.call(null,mm_name))?replcljs.core.conj.call(null,replcljs.core.meta.call(null,mm_name),m__$1):m__$1);
if(replcljs.core._EQ_.call(null,replcljs.core.count.call(null,options__$3),1))
{throw "The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)";
} else
{}
var options__$4 = replcljs.core.apply.call(null,replcljs.core.hash_map,options__$3);
var default$ = replcljs.core._lookup.call(null,options__$4,"\uFDD0'default","\uFDD0'default");
replcljs.core.check_valid_options.call(null,options__$4,"\uFDD0'default","\uFDD0'hierarchy");
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"def"))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,mm_name,m__$2)),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"method-table__4264__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/atom"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"prefer-table__4265__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/atom"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"method-cache__4266__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/atom"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"cached-hierarchy__4267__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/atom"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.hash_map,replcljs.core.seq.call(null,replcljs.core.concat.call(null))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"hierarchy__4268__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/get"))),replcljs.core.list.call(null,options__$4),replcljs.core.list.call(null,"\uFDD0'hierarchy"),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/global-hierarchy")))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/MultiFn."))),replcljs.core.list.call(null,replcljs.core.name.call(null,mm_name)),replcljs.core.list.call(null,dispatch_fn),replcljs.core.list.call(null,default$),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"hierarchy__4268__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"method-table__4264__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"prefer-table__4265__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"method-cache__4266__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"cached-hierarchy__4267__auto__")))))))))));
};
var defmulti = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,var_args){
var options = null;
if (replgoog.isDef(var_args)) {
  options = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
}
return defmulti__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, mm_name, options);
};
defmulti.cljs$lang$maxFixedArity = 3;
defmulti.cljs$lang$applyTo = (function (arglist__4270){
var _AMPERSAND_form = replcljs.core.first(arglist__4270);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4270));
var mm_name = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4270)));
var options = replcljs.core.rest(replcljs.core.next(replcljs.core.next(arglist__4270)));
return defmulti__delegate(_AMPERSAND_form, _AMPERSAND_env, mm_name, options);
});
defmulti.cljs$lang$arity$variadic = defmulti__delegate;
return defmulti;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defmulti")));
/**
* Creates and installs a new method of multimethod associated with dispatch-value.
* @param {...*} var_args
*/
replcljs.core.defmethod = (function() {
var defmethod__delegate = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-add-method"))),replcljs.core.list.call(null,replcljs.core.with_meta.call(null,multifn,replcljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":(new replcljs.core.Symbol(null,"replcljs.core/MultiFn"))}))),replcljs.core.list.call(null,dispatch_val),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),fn_tail)))));
};
var defmethod = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,var_args){
var fn_tail = null;
if (replgoog.isDef(var_args)) {
  fn_tail = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
}
return defmethod__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
};
defmethod.cljs$lang$maxFixedArity = 4;
defmethod.cljs$lang$applyTo = (function (arglist__4273){
var _AMPERSAND_form = replcljs.core.first(arglist__4273);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4273));
var multifn = replcljs.core.first(replcljs.core.next(replcljs.core.next(arglist__4273)));
var dispatch_val = replcljs.core.first(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4273))));
var fn_tail = replcljs.core.rest(replcljs.core.next(replcljs.core.next(replcljs.core.next(arglist__4273))));
return defmethod__delegate(_AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
});
defmethod.cljs$lang$arity$variadic = defmethod__delegate;
return defmethod;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"defmethod")));
/**
* Evaluates expr and prints the time it took. Returns the value of expr.
*/
replcljs.core.time = (function time(_AMPERSAND_form,_AMPERSAND_env,expr){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"start__4271__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".getTime"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Date."))))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"ret__4272__auto__"))),replcljs.core.list.call(null,expr))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/prn"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,"Elapsed time: "),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/-"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".getTime"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"js/Date."))))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"start__4271__auto__")))))),replcljs.core.list.call(null," msecs"))))))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"ret__4272__auto__")))));
});
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"time")));
/**
* Evaluates exprs in a context in which *print-fn* is bound to .append
* on a fresh StringBuffer.  Returns the string created by any nested
* printing calls.
* @param {...*} var_args
*/
replcljs.core.with_out_str = (function() {
var with_out_str__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/let"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"sb__4274__auto__"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replgoog.string/StringBuffer.")))))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/binding"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/*print-fn*"))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/fn"))),replcljs.core.list.call(null,replcljs.core.apply.call(null,replcljs.core.vector,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"x__4275__auto__"))))))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,".append"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"sb__4274__auto__"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"x__4275__auto__"))))))))))))),body))),replcljs.core.list.call(null,replcljs.core.seq.call(null,replcljs.core.concat.call(null,replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"replcljs.core/str"))),replcljs.core.list.call(null,(new replcljs.core.Symbol(null,"sb__4274__auto__"))))))));
};
var with_out_str = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (replgoog.isDef(var_args)) {
  body = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
}
return with_out_str__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
with_out_str.cljs$lang$maxFixedArity = 2;
with_out_str.cljs$lang$applyTo = (function (arglist__4276){
var _AMPERSAND_form = replcljs.core.first(arglist__4276);
var _AMPERSAND_env = replcljs.core.first(replcljs.core.next(arglist__4276));
var body = replcljs.core.rest(replcljs.core.next(arglist__4276));
return with_out_str__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
with_out_str.cljs$lang$arity$variadic = with_out_str__delegate;
return with_out_str;
})()
;
replcljs.core.setMacro.call(null,(new replcljs.core.Symbol(null,"with-out-str")));

// Analyzer namespace snapshot:
replcljs.core.swap_BANG_.call(null,replcljs.core.namespaces,replcljs.core.update_in,replcljs.core.PersistentVector.fromArray([(new replcljs.core.Symbol(null,"replcljs.core"))], true),(function (old){
return replcljs.core.deep_merge_with.call(null,(function() {
var G__4277__delegate = function (m){
return replcljs.core.first.call(null,m);
};
var G__4277 = function (var_args){
var m = null;
if (replgoog.isDef(var_args)) {
  m = replcljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
}
return G__4277__delegate.call(this, m);
};
G__4277.cljs$lang$maxFixedArity = 0;
G__4277.cljs$lang$applyTo = (function (arglist__4278){
var m = replcljs.core.seq(arglist__4278);;
return G__4277__delegate(m);
});
G__4277.cljs$lang$arity$variadic = G__4277__delegate;
return G__4277;
})()
}));