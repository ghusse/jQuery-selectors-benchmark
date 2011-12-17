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

register("Id selector '#id'",
	function(){
		$("#id1");
	},
	function(){
		for (var i = 0; i< elements; i++){
			$("<div />").attr("id", "id" + i).appendTo(container);
		}
	},
	function(){
		container.empty();
	});

register("Class selector '.class'",
	function(){
		$(".class" + (elements - 1));
	},
	function(){
		for (var i = 0; i < elements; i++){
			$("<p />").addClass("class" + i).appendTo(container);
		}
	});

register("Element selector 'p'",
	function(){
		return container.find("p");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			$("<div />").appendTo(container);
		}
	
		$("<p />").appendTo(container);
	});

register("Headers selector ':header'",
	function(){
		return container.find(":header");
	},
	function(){
		for (var i = 0; i < elements - 1; i++){
			$("<div />").appendTo(container);
		}
	
		$("<h1 />").appendTo(container);
	});
