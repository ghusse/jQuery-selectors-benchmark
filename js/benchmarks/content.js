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


register("Content selector ':contains'",
	function(){
		container.find(":contains('text"+(elements - 1)+"')");
	},
	function(){
		for (var i = 0; i < elements; i++){
			$("<div />").text("text"+i).appendTo(container);
		}
	});

register("Empty selector ':empty'",
	function(){
		container.find(":empty");
	},
	function(){
		for (var i = 0; i< elements - 1; i++){
			$("<div>text</div>").appendTo(container);
		}
	
		$("<div />").appendTo(container);
	});

register("Parent selector ':parent'",
	function(){
		container.find(":parent");
	},
	function(){
		for (var i = 0; i< elements - 1; i++){
			container.append("<div />");
		}
		
		container.append("<div>content</div>")
	});