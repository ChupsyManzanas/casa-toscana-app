const s=new Set;function n(e){return s.add(e),()=>{s.delete(e)}}function r(e){for(const t of s)t(e)}export{r,n as s};
