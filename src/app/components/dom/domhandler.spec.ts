import { DomHandler } from './domhandler';

describe('DomHandler', () => {
    it('should add single and multiple class to element', () => {
        const element = document.createElement('div');
        DomHandler.addClass(element, 'ng_prime');
        let mockElement = { classList: undefined, className: '' };
        DomHandler.addClass(mockElement, 'ng_prime');
        expect(element.classList).toContain('ng_prime');
        expect(mockElement.className).toContain('ng_prime');
        DomHandler.addMultipleClasses(element, 'rocks! vamos!');
        DomHandler.addMultipleClasses(mockElement, 'rocks! vamos!');
        expect(element.classList.value).toContain('ng_prime rocks! vamos!');
        expect(mockElement.className).toContain('rocks! vamos!');
    });

    it('should remove class from element', () => {
        const element = document.createElement('div');
        DomHandler.addClass(element, 'ng_prime');
        let mockElement = { classList: undefined, className: '' };
        DomHandler.addClass(mockElement, 'ng_prime');
        DomHandler.removeClass(element, 'ng_prime');
        DomHandler.removeClass(mockElement, 'ng_prime');
        expect(element.classList).not.toContain('ng_prime');
        expect(mockElement.className).not.toContain('ng_prime');
    });

    it('should check elemets class', () => {
        const element = document.createElement('div');
        DomHandler.addClass(element, 'ng_prime');
        let mockElement = { classList: undefined, className: '' };
        DomHandler.addClass(mockElement, 'ng_prime');
        expect(DomHandler.hasClass(element, 'ng_prime')).toBeTruthy();
        expect(DomHandler.hasClass(mockElement, 'ng_prime')).toBeTruthy();
    });

    it('should get siblings', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('span');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        expect(DomHandler.siblings(element.children[0]).length).toEqual(2);
    });

    it('should remove child', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('span');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        DomHandler.removeChild(element.children[1], element);
        expect(element.children.length).toEqual(2);
    });

    it('should check value isInteger', () => {
        expect(DomHandler.isInteger(5)).toBeTruthy();
        expect(DomHandler.isInteger('5')).toBeFalsy();
    });

    it('should get focusable elements', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        const childEl4 = document.createElement('button');
        childEl2.setAttribute('href', 'https://ng_prime.org');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        element.appendChild(childEl4);
        document.body.appendChild(element);
        expect(DomHandler.getFocusableElements(element).length).toEqual(1);
    });

    it('should get the next focusable element', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('button');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        document.body.appendChild(element);
        expect(DomHandler.getNextFocusableElement(element)).toEqual(childEl3);
    });

    it('should find element', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        DomHandler.addClass(childEl, 'ng_prime');
        DomHandler.addClass(childEl3, 'ng_prime');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        expect(DomHandler.find(element, 'a').length).toEqual(2);
        expect(DomHandler.findSingle(element, 'a')).toBeTruthy();
        expect(DomHandler.findSingle(null, 'a')).toBeNull();
    });

    it('should find index', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        DomHandler.addClass(childEl, 'ng_prime');
        DomHandler.addClass(childEl3, 'ng_prime');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        expect(DomHandler.index(element.children[2])).toEqual(2);
    });

    it('should find index with indexWithinGroup', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        childEl2.setAttribute('height', '300px');
        childEl3.setAttribute('height', '300px');
        DomHandler.addClass(childEl, 'ng_prime');
        DomHandler.addClass(childEl3, 'ng_prime');
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        expect(DomHandler.indexWithinGroup(element.children[2], 'height')).toEqual(1);
    });

    it('should use relativePosition', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        childEl2.setAttribute('ng_prime', 'rocks!');
        childEl3.setAttribute('ng_prime', 'rocks!');
        DomHandler.addClass(childEl, 'ng_prime');
        DomHandler.addClass(childEl3, 'ng_prime');
        element.style.height = '200px';
        element.style.width = '200px';
        childEl3.style.height = '100px';
        childEl3.style.width = '100px';
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        spyOn(DomHandler, 'getWindowScrollTop').and.returnValue(0);
        spyOn(DomHandler, 'getWindowScrollLeft').and.returnValue(0);
        DomHandler.relativePosition(element.children[2], element);
        expect(childEl3.style.top).toEqual('0px');
        expect(childEl3.style.left).toEqual('0px');
    });

    describe('relativePosition', () => {
        it('should avoid overflow if element exceeds document width', () => {
            const elementWidth = 200;
            const targetWidth = 10;
            const viewportWidth = DomHandler.getViewport().width;

            const relativeElement = document.createElement('div');
            relativeElement.style.position = 'relative';
            relativeElement.style.width = targetWidth + 'px';
            relativeElement.style.left = viewportWidth - elementWidth / 2 + 'px';
            document.body.appendChild(relativeElement);

            const element = document.createElement('div');
            element.style.width = elementWidth + 'px';
            element.style.position = 'absolute';
            relativeElement.appendChild(element);

            const target = document.createElement('div');
            target.style.width = targetWidth + 'px';
            relativeElement.appendChild(target);

            DomHandler.relativePosition(element, target);

            expect(element.getBoundingClientRect().right).toBe(viewportWidth);
        });
    });

    it('should use absolutePosition', () => {
        const element = document.createElement('div');
        const childEl = document.createElement('p');
        const childEl2 = document.createElement('a');
        const childEl3 = document.createElement('a');
        childEl2.setAttribute('ng_prime', 'rocks!');
        childEl3.setAttribute('ng_prime', 'rocks!');
        DomHandler.addClass(childEl, 'ng_prime');
        DomHandler.addClass(childEl3, 'ng_prime');
        element.style.height = '200px';
        element.style.width = '200px';
        childEl3.style.height = '100px';
        childEl3.style.width = '100px';
        element.appendChild(childEl);
        element.appendChild(childEl2);
        element.appendChild(childEl3);
        spyOn(DomHandler, 'getWindowScrollTop').and.returnValue(0);
        spyOn(DomHandler, 'getWindowScrollLeft').and.returnValue(0);
        DomHandler.absolutePosition(element.children[2], element);
        expect(childEl3.style.top).toEqual('0px');
        expect(childEl3.style.left).toEqual('0px');
    });

    it('should get hidden element height and width', () => {
        const element = document.createElement('div');
        element.style.height = '0px';
        element.style.width = '0px';
        expect(DomHandler.getHiddenElementOuterHeight(element)).toEqual(0);
        expect(DomHandler.getHiddenElementOuterWidth(element)).toEqual(0);
    });
});
