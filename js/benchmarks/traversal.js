/* 
 * Copyright (C) 2011 guillaumegautreau
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function createDivsAndP(){
	var sqrt = Math.sqrt(elements),
	parent;
		
	for (var i = 0; i<sqrt; i++){
		parent = $("<div />").appendTo(container);
		for (var j = 0; j < sqrt; j++){
			$("<div />").appendTo(parent);
		}
	}
		
	parent.append($("<p />"));
}
	
register("Child selector 'a > b'",
	function(){
		return container.find("div > p");
	},
	function(){
		createDivsAndP();
	});

register("Descendant selector 'a b'",
	function(){
		return container.find("div p");
	},
	function(){
		createDivsAndP();
	});
	
register("Find method '.find()'",
	function(){
		return container.find("div").find("p");
	},
	function(){
		createDivsAndP();
	});

register("One call with two parameters '$(\"a\", \"b\")'",
	function(){
		container.find("div", "p");
	},
	function(){
		createDivsAndP();
	});
	
register("Has selector ':has()'",
	function(){
		return container.find("div:has(p)");
	},
	function(){
		createDivsAndP();
	});
	
register("Next adjacent selector 'a + b'",
	function(){
		return container.find("div + p");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			container.append("<div />");
		}
			
		container.append("<p />")
	});
	
register("Next siblings selector 'a ~ b'",
	function(){
		return container.find("div ~ p");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			container.append("<div />");
		}
			
		container.append("<p />")
	});
