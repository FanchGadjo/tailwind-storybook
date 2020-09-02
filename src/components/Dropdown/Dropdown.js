import React from "react";
import PropTypes from "prop-types";

import "./Dropdown.css";

const Dropdown = ({ title = "", image = "", children }) => (
		<div class="relative inline-block text-left mx-64">
			<div>
				<span class="rounded-md shadow-sm">
					<button
						type="button"
						class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
						id="options-menu"
						aria-haspopup="true"
						aria-expanded="true"
					>
						Options
						<svg
							class="w-5 h-5 ml-2 -mr-1"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</span>
			</div>
			<div class="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg">
				<div
					class="bg-white rounded-md shadow-xs"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="options-menu"
				>
					<div class="py-1">
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Edit
						</a>
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Duplicate
						</a>
					</div>
					<div class="border-t border-gray-100"></div>
					<div class="py-1">
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Archive
						</a>
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Move
						</a>
					</div>
					<div class="border-t border-gray-100"></div>
					<div class="py-1">
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Share
						</a>
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Add to favorites
						</a>
					</div>
					<div class="border-t border-gray-100"></div>
					<div class="py-1">
						<a
							href="#"
							class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
							role="menuitem"
						>
							Delete
						</a>
					</div>
				</div>
			</div>
		</div>
);

Dropdown.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
};

export default Dropdown;
