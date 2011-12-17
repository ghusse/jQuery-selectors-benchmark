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

(function($){
	var ProgressBar = function(container, maxValue){
		this.max = maxValue;
		this.value = 0;
		this.container = container;
		this.element = $("<div class='progress' />").appendTo(container);
		this.progress = $("<div class='progressIndicator' />").appendTo(this.element);
		
		this.set = function(value){
			this.progress.css("width", value * this.element.innerWidth() / this.max);
		}
		
		this.destroy = function(){
			this.element.detach();
		}
		
		this.set(0);
	}
	$(document).ready(function(){
		var loading = $("#loading");
		var progress = null;
			
		$(document)
		.bind("event", function(e, text){
			loading.find("span").text(text);
		})
		.bind("startProgress", function(e, max){
			progress = new ProgressBar('#loading', max);
		})
		.bind("progress", function(e, value){
			(function(p){
				setTimeout(function(){
					p.set(value);
				}, 1);
			})(progress);
		})
		.bind("stopProgress", function(){
			(function(p){
				setTimeout(function(){
					p.destroy();
				}, 1);
			})(progress);
		})
		.bind("end", function(){
			$("#loading").hide();
		})
		
		loading.find("span").text("Document loaded");
		
		$(document).trigger("setup");
	});
})(jQuery);
