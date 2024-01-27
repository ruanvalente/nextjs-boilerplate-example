interface HttpRequestOptions {
  method: string
  headers?: Headers
  body?: string
}

interface ApiResponse<T> {
  status: number
  data: T
}

interface Http {
  get<T>(url: string): Promise<ApiResponse<T>>
  post<T>(url: string, data: any): Promise<ApiResponse<T>>
  put<T>(url: string, data: any): Promise<ApiResponse<T>>
  delete<T>(url: string): Promise<ApiResponse<T>>
}

class HttpClient implements Http {
  private baseHeaders: Headers

  constructor(baseHeaders: Headers = new Headers()) {
    this.baseHeaders = baseHeaders
  }

  private async request<T>(
    url: string,
    options: HttpRequestOptions,
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(url, {
        method: options.method,
        headers: new Headers({ ...this.baseHeaders, ...options.headers }),
        body: options.body,
      })

      const responseData = await response.json()

      return {
        status: response.status,
        data: responseData,
      }
    } catch (error) {
      throw new Error(`Erro na requisição: ${error}`)
    }
  }

  async get<T>(url: string): Promise<ApiResponse<T>> {
    return this.request(url, { method: 'GET' })
  }

  async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return this.request(url, { method: 'POST', body: JSON.stringify(data) })
  }

  async put<T>(url: string, data: any): Promise<ApiResponse<T>> {
    return this.request(url, { method: 'PUT', body: JSON.stringify(data) })
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.request(url, { method: 'DELETE' })
  }
}
