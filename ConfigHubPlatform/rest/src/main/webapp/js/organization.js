/*
 * This file is part of ConfigHub.
 *
 * ConfigHub is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ConfigHub is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ConfigHub.  If not, see <http://www.gnu.org/licenses/>.
 */

angular
    .module('configHub.organization', [
        'configHub.organization.create'
    ])

    .config(['$stateProvider', function ($stateProvider)
    {
        $stateProvider

            .state('createOrganization', {
                url: '/organization/create',
                templateUrl: 'organization/create.html',
                pageTitle: 'New Organization',
                data: {
                    requireLogin: true
                }
            })

        ;
    }])

    ;

