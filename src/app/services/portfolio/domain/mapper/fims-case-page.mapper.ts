/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {mapToFimsCase} from './fims-case.mapper';
import {FimsCasePage} from '../fims-case-page.model';
import {CasePage} from '../case-page.model';

export function mapToFimsCasePage(casePage: CasePage): FimsCasePage {
  let elements = [];
  
  for(let caseInstance of casePage.elements) {
    elements.push(mapToFimsCase(caseInstance));
  }
  
  return {
    elements: elements,
    totalPages: casePage.totalPages,
    totalElements: casePage.totalElements
  }
}
