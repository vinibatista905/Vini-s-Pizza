import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
    return (
        <FeatureContainer>
            <h1>Pizza do Dia</h1>
            <p>Molho de trufas alfredo coberto com orégano e azeitonas.</p>
            <FeatureButton>Peça Agora</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
