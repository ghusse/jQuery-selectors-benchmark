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

function createDivs(){
	for (var i = 0; i < elements; i++){
		$("<div />").appendTo(container);
	}
}
	
register("Eq selector ':eq'",
	function(){
		return container.find("div:eq(" + (elements - 1 ) + ")");
	},
	function(){
		createDivs();
	});
	
register("Eq method '.eq()'",
	function(){
		return container.find("div").eq(elements - 1);
	},
	function(){
		createDivs();
	});
	
register("Even selector ':even'",
	function(){
		return container.find("div:even");
	},
	function(){
		createDivs();
	});
	
register("Odd selector ':odd'",
	function(){
		return container.find("div:odd");
	},
	function(){
		createDivs();
	});
	
register("First child selector ':first-child'",
	function(){
		return container.find("div:first-child");
	},
	function(){
		createDivs();
	});
		
register("First selector ':first'",
	function(){
		return container.find("div:first");
	},
	function(){
		createDivs();
	});
	
register("Greater index than selector ':gt()'",
	function(){
		return container.find("div:gt(" + (elements - 2) + ")");
	},
	function(){
		createDivs();
	});
	
register("Last child selector ':last-child'",
	function(){
		return container.find("div:last-child");
	},
	function(){
		createDivs();
	});
	
register("Last selector ':last'",
	function(){
		return container.find("div:last");
	},
	function(){
		createDivs();
	});
	
register("Nth-child selector ':nth-child'",
	function(){
		return container.find("div:nth-child(" + elements + ")");
	},
	function(){
		createDivs();
	});
	
register("Only child ':only-child'",
	function(){
		return container.find("p:only-child");
	},
	function(){
		for (var i = 0; i< elements / 2; i++){
			var parent = $("<div />").appendTo(container);
			parent.append("<p />").append("<p />");
		}
			
		$("<div />").appendTo(container).append("<p />");
	});