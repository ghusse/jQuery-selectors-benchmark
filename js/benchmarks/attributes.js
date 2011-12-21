/* 
 * Copyright (C) 2011 ggautreau
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

function createElementsWithAttribute(attrBefore, attrAfter, elements, container){
	for (var i = 0; i < elements; i++){
		$("<div />").attr("data-attr", attrBefore + i + attrAfter).appendTo(container);
	}
}

register("Attribute contains prefix '[attr|=foo]'",
	function(){
		container.find("[data-attr|='attr" + ( elements - 1) + "']");
	},
	function(){
		createElementsWithAttribute("attr", "", elements, container);
	},
	function(){
		container.empty();
	});

register("Attribute contains '[attr*=foo]'",
	function(){
		container.find("[data-attr*='attr" + (elements - 1) + "']");
	},
	function(){
		createElementsWithAttribute("attr", "", elements, container);
	},
	function(){
		container.empty();
	});
		
register("Attribute contains word '[attr~=foo]'",
	function(){
		container.find("[data-attr~='attr" +( elements - 1) + "']")
	},
	function(){
		createElementsWithAttribute("attr", "", elements, container);
	},
	function(){
		container.empty();
	});
	
register("Attribute ends with '[attr$=foo]'",
	function(){
		container.find("[data-attr$='attr" + (elements - 1) + "']");
	},
	function(){
		createElementsWithAttribute("attr", "", elements, container);
	},
	function(){
		container.empty();
	});
	
register("Attribute not equal '[attr!=foo]'",
	function(){
		container.find("[data-attr!='attr1']");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			$("<div />").attr("data-attr", "attr1").appendTo(container);
		}
		
		$("<div />").attr("data-attr", "attr" + (elements - 1)).appendTo(container);
	},
	function(){
		container.empty();
	});
		
register("Attribute starts with '[attr^=foo]'",
	function(){
		container.find("[data-attr^='attr" +( elements - 1) + "']");
	},
	function(){
		createElementsWithAttribute("attr", "", elements, container);
	},
	function(){
		container.empty();
	});
	
register("Has attribute '[attribute]'",
	function(){
		container.find("[data-attr]");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			$("<div />").appendTo(container);
		}
			
		$("<div />").attr("data-attr", "foobar").appendTo(container);
	},
	function(){
		container.empty();
	});

/**
 * Unstable test, does not return 1 element every time it's launched
 */
register("Hidden selector: ':hidden'",
	function(){
		return container.find(":hidden");
	},
	function(){
		container.css("display", "block").css("width", 1).css("height", 1).css("overflow", "hidden");
		for (var i = 0; i< elements - 1 ; i++){
			container.append("<div style='width:1; height: 1'/>");
		}
		
		container.append("<div style='width:0; height:0' />");
	},
	function(){
		container.css("display", "none")
		.empty();
	});
	
/**
 * Unstable, returns 1 or 2 elements
 */
register("Visible selector ':visible'",
	function(){
		return container.find(":visible");
	},
	function(){
		container.css("display", "block")
		.css("width", 1)
		.css("height", 1);
		
		for (var i = 0; i < elements / 4; i++){
			container.append("<div style='display:none' />")
			.append("<input type='hidden' />")
			.append("<div style='width:0; height:0' />");
		}
		
		for (i = 0; i < elements / 8; i++){
			var p = $("<div style='display:none' />").appendTo(container);
			p.append("<div />");
		}
		
		container.append("<div style='width:1; height:1' />");
	},
	function(){
		container.css("display", "none");
		container.empty();
	});
