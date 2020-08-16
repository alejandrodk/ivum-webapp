import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AppContext } from '../../common/AppContext';

const useDataFetching = dataSource => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(dataSource, {
          headers: { token: user.token },
        });

        if (response.data) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();

    return () => {};
  }, [user, dataSource]);

  return {
    loading,
    data,
    error,
  };
};

export default useDataFetching;
