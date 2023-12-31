/**
 * Copyright (c) 2020 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author David Sehnal <david.sehnal@gmail.com>
 */

import { Box3D } from '../../../mol-math/geometry';
import { Vec3 } from '../../../mol-math/linear-algebra';
import { RuntimeContext } from '../../../mol-task';
import { sphericalCollocation } from '../collocation';
import { Basis, CubeGridInfo } from '../data-model';

describe('alpha-orbitals-cubes', () => {
    it('water', async () => {
        const grid: CubeGridInfo = {
            params: {
                basis: _testBasis,
                cutoffThreshold: 0,
                sphericalOrder: 'cca-reverse',
                boxExpand: 0,
                gridSpacing: []
            },
            box: Box3D.create(Vec3.create(-1, -1, -1), Vec3.create(1, 1, 1)),
            delta: Vec3.create(2, 2, 2),
            dimensions: Vec3.create(2, 2, 2),
            npoints: 8,
            size: Vec3.create(2, 2, 2)
        };

        const matrix = await sphericalCollocation(grid, {
            energy: 0,
            occupancy: 0,
            alpha: [-2.2623991420609075e-16, 0.6360205395000592, 0.6672122399886391, -0.3876927909355508, -1.6780131293332933e-16, 2.844782862661151e-16, 4.977960694176068e-19, -2.3945919908996803e-16]
        }, RuntimeContext.Synchronous);

        const expected = [-0.1451730622877498, 0.06479453956039086, -0.2777738736440713, -0.057116584776260436, 0.05929916178822645, 0.2742903371231049, -0.07221698722165386, 0.15389180241391376];

        expect(matrix.length).toBe(expected.length);

        for (let i = 0; i < matrix.length; i++) {
            expect(Math.abs(matrix[i] - expected[i]) < 1e-6).toBe(true);
        }
    });
});

const _testBasis: Basis = {
    'atoms': [
        {
            'center': [
                0.025886090588624934,
                0.019164790004065606,
                -0.013539970104105408
            ],
            'shells': [
                {
                    'angularMomentum': [0],
                    'coefficients': [
                        [
                            -0.004151277818987536,
                            -0.02067024147993795,
                            -0.05150303336984537,
                            0.33462711739899537,
                            0.5621061300983125,
                            0.17129946969948573
                        ]
                    ],
                    'exponents': [
                        152.28769660788095,
                        27.928015215973073,
                        7.848374792384515,
                        1.1223350202705642,
                        0.5093846587907856,
                        0.24292266532510307
                    ]
                },
                {
                    'angularMomentum': [1],
                    'coefficients': [
                        [
                            0.007924233646294425,
                            0.051441048251911314,
                            0.18984000600705359,
                            0.4049863191150474,
                            0.40123628611490797,
                            0.1051855189039082
                        ]
                    ],
                    'exponents': [
                        27.203421487167727,
                        7.09409912597673,
                        2.5383362605345954,
                        1.0610730767843852,
                        0.4851948916410433,
                        0.22938302550642545
                    ]
                }
            ]
        },
        {
            'center': [
                0.5082729578468134,
                1.6880351220025265,
                0.4963443067810461
            ],
            'shells': [
                {
                    'angularMomentum': [0],
                    'coefficients': [
                        [
                            0.009163596280542963,
                            0.04936149294292479,
                            0.16853830490998634,
                            0.37056279972195677,
                            0.4164915298246781,
                            0.13033408410772263
                        ]
                    ],
                    'exponents': [
                        33.710073211949485,
                        6.180705022740464,
                        1.7291385346152253,
                        0.5940057549921978,
                        0.2306698170449518,
                        0.09500256906284119
                    ]
                },
                {
                    'angularMomentum': [0],
                    'coefficients': [
                        [
                            -0.32279868167000036,
                            3.209629817295221,
                            2.4672629224617935,
                            -0.048487066612842224,
                            -0.2611850111200143,
                            -0.8917817597810863,
                            -1.9607480081275706,
                            -2.203769342520311,
                            -0.6896328935259993
                        ]
                    ],
                    'exponents': [
                        10.256286070314905,
                        0.6227965325875392,
                        0.2391007667853915,
                        33.710073211949485,
                        6.180705022740464,
                        1.7291385346152253,
                        0.5940057549921978,
                        0.2306698170449518,
                        0.09500256906284119
                    ]
                }
            ]
        },
        {
            'center': [
                1.1367367844436005,
                -0.47018519422670163,
                -1.356802622574504
            ],
            'shells': [
                {
                    'angularMomentum': [0],
                    'coefficients': [
                        [
                            0.009163596280542963,
                            0.04936149294292479,
                            0.16853830490998634,
                            0.37056279972195677,
                            0.4164915298246781,
                            0.13033408410772263
                        ]
                    ],
                    'exponents': [
                        33.710073211949485,
                        6.180705022740464,
                        1.7291385346152253,
                        0.5940057549921978,
                        0.2306698170449518,
                        0.09500256906284119
                    ]
                },
                {
                    'angularMomentum': [0],
                    'coefficients': [
                        [
                            -0.32279868167000036,
                            3.209629817295221,
                            2.4672629224617935,
                            -0.048487066612842224,
                            -0.2611850111200143,
                            -0.8917817597810863,
                            -1.9607480081275706,
                            -2.203769342520311,
                            -0.6896328935259993
                        ]
                    ],
                    'exponents': [
                        10.256286070314905,
                        0.6227965325875392,
                        0.2391007667853915,
                        33.710073211949485,
                        6.180705022740464,
                        1.7291385346152253,
                        0.5940057549921978,
                        0.2306698170449518,
                        0.09500256906284119
                    ]
                }
            ]
        }
    ]
};