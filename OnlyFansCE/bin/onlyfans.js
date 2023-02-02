"use strict";
/*
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <https://unlicense.org>
 */

function of_link(id,href) {
  let a=document.createElement("a");
  a.id=id;
  a.href=href;
  a.style.position="fixed";
  a.style.display="block";
  a.style.left="50%";
  a.style.top="50%";
  a.style.marginLeft="-90px";
  a.style.marginTop="100px";
  a.style.color="rgba(255,255,255,0.6)";
  a.style.backgroundColor="rgba(32,32,32,0.6)";
  a.style.backdropFilter="blur(5px)";
  a.style.padding="9px 12px 7px 12px";
  a.style.font="bold 15px/15px Roboto, Sans-serif";
  a.style.borderRadius="4px";
  a.style.zIndex="99999";
  a.style.transition="0.2s ease";
  a.style.userSelect="none";
  a.onmouseover=function(e) {
    this.style.color=" *fff";
    this.style.backgroundColor="rgba(32,32,32,0.8)";
    e.stopPropagation(); e.preventDefault();
  }
  a.onmouseout=function(e) {
    this.style.color="rgba(255,255,255,0.6)";
    this.style.backgroundColor="rgba(32,32,32,0.6)";
    e.stopPropagation(); e.preventDefault();
  }
  a.innerHTML="DOWNLOAD (SAVE AS)";
  document.body.appendChild(a);
  return a;
}

function of_check() {
  let pswp=document.getElementsByClassName("pswp__img");
  if (pswp.length<1) {
    let a=document.getElementById("OFDLIMG");
    if (a) {
      a.onmouseover=null; a.onmouseout=null;
      document.body.removeChild(a);
      return;
    }
  }
  for (let i=0; i<pswp.length; i++) {
    if (pswp[i].style.display==="block") {
      if (pswp[i].getElementsByTagName("a").length<1&&!document.getElementById("OFDLIMG")) {
        of_link("OFDLIMG",pswp[i].currentSrc);
      }
    }
  }
  let vidw=document.getElementsByClassName("video-wrapper");
  if (vidw.length<1) {
    let a=document.getElementById("OFDLVID");
    if (a) {
      a.onmouseover=null; a.onmouseout=null;
      document.body.removeChild(a);
      return;
    }
  }
  if (vidw.length<3) return;
  let src=vidw[1].getElementsByTagName("source");
  if (src.length<1) return;
  if (!document.getElementById("OFDLVID")) {
    of_link("OFDLVID",src[0].src);
    let p=document.getElementsByClassName("vjs-big-play-button");
    if (p.length>0) p[0].parentNode.removeChild(p[0]);
  }
}

window.addEventListener("load",function(e) {
  setInterval(function() { of_check(); },100);
},false);
