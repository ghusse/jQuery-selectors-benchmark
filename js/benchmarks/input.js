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

function createInputs(number, type, container){
	for (var i = 0; i < number; i++){
		$("<input type='"+type+"' name='input" + i + "' />").appendTo(container);
	}
}

register("Button selector", 
	function(){
		return container.find(":button");
	},
	function(){
		createInputs(elements-1, "text", container);
		$("<input type='button' name='me' />").appendTo(container);
	});
	
register("Checkbox selector",
	function(){
		return container.find(":checkbox");
	},
	function(){
		createInputs(elements - 1, "text", container);
		$("<input type='checkbox' name='me' />").appendTo(container);
	});
	
register("Enabled ':enabled'",
	function(){
		return container.find(":enabled");
	},
	function(){
		createInputs(elements - 1, "text", container);
		container.find("input").attr("disabled", "disabled");
		createInputs(1, "text", container);
	});
	
register("File selector ':file'",
	function(){
		return container.find(":file");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "file", container);
	});
	
register("Focus selector ':focus'",
	function(){
		return container.find(":focus");
	},
	function(){
		container.css("display", "block")
		.css("width", 0)
		.css("height", 0)
		.css("overflow", "hidden");
		createInputs(elements, "text", container);
		container.find("input:last").focus();
	},
	function(){
		container.css("display", "none");
		container.empty	();
	});
	
register("Image selector ':image'",
	function(){
		return container.find(":image");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "image", container);
	});
	
register("Input selector ':input'",
	function(){
		return container.find(":input");
	},
	function(){
		for (var i = 0; i< elements - 1; i++){
			container.append("<div></div>");
		}
		
		createInputs(1, "text", container);
	});
	
register("Password selector ':password'",
	function(){
		return container.find(":password");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "password", container);
	});
	
register("Radio selector ':radio'",
	function(){
		return container.find(":radio");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "radio", container);
	});
	
register("Reset selector ':reset'",
	function(){
		return container.find(":reset");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "reset", container);
	});
	
register("Selected selector ':selected'",
	function(){
		return container.find("option:selected");
	},
	function(){
		var select = $("<select />");
		for (var i = 0; i< elements - 1; i++){
			select.append("<option>" + i + "<option>");
		}
		
		select.append("<option selected='selected'>Selected</option>");
	});
	
register("Submit selector ':submit'",
	function(){
		return container.find(":submit");
	},
	function(){
		createInputs(elements - 1, "text", container);
		createInputs(1, "submit", container);
	});
	
register("Text selector ':text'",
	function(){
		return container.find(":text");
	},
	function(){
		createInputs(elements - 1, "password", container);
		createInputs(1, "text", container);
	});
