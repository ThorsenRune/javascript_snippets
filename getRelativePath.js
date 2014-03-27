// Return the relative path from sourcefile to targetfile
function getRelativePath(source, target) {
/*	returns the path to the target relative to the source
	@source=filename (with absolute path) of the source
	@target=filename (with absolute path) to the target
	algorithm:
		1. strip out the common basedir of source and target
		2  if no common basedir  return the full target
		3. find number of ../ from source to basedir
		4. return #(../)+base_dir_stripped_target
[rev0. 2014-03-27 by Rune Thorsen]		

thanks to:https://gist.github.com/eriwen/1211656 for inspiration		
*/
	sep = (source.indexOf("/") !== -1) ? "/" : "\\";
	targetArr = target.split(sep);
	sourceArr = source.split(sep);
	if (targetArr[0]!=sourceArr[0])	
	{		//NO common root return the full target
		return target;
	}
	//There is a common root, remove it
	while (targetArr[0]==sourceArr[0]) {//Strip common root
		if (sourceArr.length<=1) break;	//if same file
		targetArr.shift();			//Remove first entry (targetArr[0])
	}	
	relativePath = "";						// Make step up string from source pos to common root
	for (var i=0;i<sourceArr.length-1;i++)
	{
		relativePath =relativePath+ ".." + sep;
	}
	res=relativePath+targetArr.join(sep);

	return res;
}
/*------------TESTING------------
use the shell bookmark for Firefox
http://www.squarefree.com/shell/shell.html
	source=document.URL;
	target="file:///C:/Pinko/Pallino/Notes/Test.htm";
	r=getRelativePath(source, target);
	window.open(r)
------------------------*/

