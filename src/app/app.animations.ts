import {
    trigger, 
    animate, 
    style, 
    state,
    group, 
    animateChild, 
    query, 
    stagger, 
    transition
} from '@angular/animations';

  export const AppAnimations = [
    trigger('showScreenCover', [
        state('hide', style({
            opacity: 0
        })),
        state('show', style({
            opacity: 0.60
        })),
        transition('hide => show', [
            animate('800ms ease-out')
        ])
    ]),
    trigger('onLoadAnimation', [
        state('hide', style({
            display: 'none',
            transform: 'translateX(-50px)'
        })),
        state('show', style({
            display: 'block',
            transform: 'translateX(0px)'
        })),
        transition('hide => show', [
            group([
                animate('400ms ease-out'),
                query('@listItemAnimation', stagger(100, [
                    animateChild()
                ])),
            ])
        ]),
    ]),
    trigger('listItemAnimation', [
        transition('false => true', [
            style({
                opacity: 0
            }),
            animate('0.1s ease-out', style({
                opacity: 1
            }))
        ])
    ]),
    trigger('showRouterOutlet', [
        state('hide', style({
            display: 'none',
            transform: 'translateY(20px)'
        })),
        state('show', style({
            display: 'block',
            transform: 'translateY(0px)'
        })),
        transition('hide => show', animate('400ms ease-out'))
    ])
]
