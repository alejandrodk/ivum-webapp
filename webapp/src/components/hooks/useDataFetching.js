import { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from '../../Helpers/auth';

const useDataFetching = dataSource => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(dataSource, {
          headers: { token: getToken() },
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
  }, [dataSource]);

  return {
    loading,
    data,
    error,
  };
};

export default useDataFetching;
