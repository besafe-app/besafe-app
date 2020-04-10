import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { PreConditionsPresentation } from 'components/presentation/PreConditions';

const PreConditionsContainer = () => {
  const [conditions, setConditions] = useState([]);
  const { navigate } = useNavigation();

  const checkCondition = condition => {
    const index = conditions.findIndex(item => item.label === condition.label);

    if (condition.check) {
      setConditions([...conditions, condition]);
    } else {
      conditions.splice(index, 1);
      setConditions(conditions);
    }
  };

  const submit = () => {
    if (conditions.length === 0) {
      navigate('Risk');
    } else {
    }
  };

  return <PreConditionsPresentation checkCondition={checkCondition} onSubmit={submit} />;
};

export default PreConditionsContainer;
