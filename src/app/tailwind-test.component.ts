import { Component } from '@angular/core';

@Component({
  selector: 'app-tailwind-test',
  standalone: true,
  template: `
    <div class="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div class="flex items-center justify-center mb-6">
          <svg class="h-12 w-12 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">Tailwind CSS Installed!</h1>
        <p class="text-gray-600 text-center mb-6">
          Congratulations! Tailwind CSS has been successfully installed in your Angular project.
        </p>
        <div class="space-y-4">
          <div class="flex items-center p-3 bg-blue-50 rounded-lg">
            <div class="bg-blue-100 rounded-full p-2 mr-3">
              <svg class="h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-blue-700">Utility-First Framework</span>
          </div>
          <div class="flex items-center p-3 bg-green-50 rounded-lg">
            <div class="bg-green-100 rounded-full p-2 mr-3">
              <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-green-700">Responsive Design</span>
          </div>
          <div class="flex items-center p-3 bg-purple-50 rounded-lg">
            <div class="bg-purple-100 rounded-full p-2 mr-3">
              <svg class="h-5 w-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-purple-700">Component-Friendly</span>
          </div>
        </div>
        <div class="mt-8 flex justify-center">
          <a href="https://tailwindcss.com/docs" target="_blank" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Explore Tailwind Docs
          </a>
        </div>
      </div>
    </div>
  `
})
export class TailwindTestComponent {}
