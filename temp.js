function createElemAfterID (afterID,tagName,id,className,content){
	var newElem = document.createElement(tagName);
	if (afterID){
		var afterIDElem = document.getElementById(afterID);
		afterIDElem.appendChild(newElem);
	}
	if (id){
		newElem.id = id;
	}
	if (className){
		newElem.className = className;
	}
	if (content){
		var textNode = document.createTextNode(content);
		newElem.appendChild(textNode);
	}
}

function createElemsAfterTags (afterTag,tagName,id,className,content){
	if (afterTag){
		var afterTagElem = document.getElementsByTagName(afterTag);
		for (var i=0; i<afterTagElem.length; i++) {
			var newElem = document.createElement(tagName);
			afterTagElem[i].appendChild(newElem);
			if (id){
				newElem.id = id;
			}
			if (className){
				newElem.className = className;
			}
			if (content){
				var textNode = document.createTextNode(content);
				newElem.appendChild(textNode);
			}
		}
	}
}

function createElemsAfterClasses (afterClass,tagName,id,className,content){
	if (afterClass){
		var afterClassElem = document.getElementsByClassName(afterClass);
		for (var i=0; i<afterClassElem.length; i++) {
			var newElem = document.createElement(tagName);
			afterClassElem[i].appendChild(newElem);
			if (id){
				newElem.id = id;
			}
			if (className){
				newElem.className = className;
			}
			if (content){
				var textNode = document.createTextNode(content);
				newElem.appendChild(textNode);
			}
		}
	}
}