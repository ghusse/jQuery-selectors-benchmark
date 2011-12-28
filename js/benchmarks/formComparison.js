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

function OneInput(inputType){
	for (var i = 0; i< elements - 1; i++){
		container.append("<div></div>");
	}
	
	$("<input name='input' type='"+inputType+"' />").appendTo(container);
}

register(":input",
	function(){
		return container.find(":input");
	},
	function(){
		OneInput("text");
	});

register("input,select,textarea,button",
	function(){
		return container.find("input");
	},
	function(){
		OneInput("text");
	});

register(":password",
	function(){
		return container.find(":password");
	},
	function(){
		OneInput("password");
	});

register("[type='password']",
	function(){
		return container.find("[type='password']");
	},
	function(){
		OneInput("password");
	});


