from sqlalchemy import create_engine, URL
from sqlalchemy.sql import text
import pandas as pd
from sqlalchemy import create_engine, URL

SQL_ROOT_FOLDER = './sql'

def create_sql_engine():

    connection_url = URL.create(
        "postgresql+psycopg2",
        username="neondb_owner",
        password="npg_Gti0UwOb3sMk",
        host="ep-bitter-cell-a19riuft-pooler.ap-southeast-1.aws.neon.tech",
        database="expenses_tracking",
        query={'sslmode': 'require'}
    )
    engine = create_engine(connection_url)

    return engine


def read_sql_file(file_name, params=None):
    
    if params:
        with open(file_name, 'r') as f:
            query = f.read()
            query = f'{query}'.format(**params)    
            return text(query)
    
    with open(file_name, 'r') as f:
        query = f.read()
        return text(query)

def execute_query(conn, query, commit=False,params=None):

    if params:
        cursor = conn.execute(query, params)
    else:
        cursor = conn.execute(query)
        
    if commit:
        conn.commit()

    return cursor


def get_data_from_query(conn, file_path, params=None):

    get_data_query = read_sql_file(file_path, params)
    data = pd.read_sql(get_data_query, conn)

    return data
